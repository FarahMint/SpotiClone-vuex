import Vue from 'vue'
import Vuex from 'vuex'


const baseURL =`https://itunes.apple.com/us/rss/topalbums/limit=100/json`;

//HELPER FUNCTION  -- DESTRUCTURE API DATA 
function formatAPI(data){
     
  // 1- destruture obj we need
  const {"im:id":id} = data.id.attributes;
  const {"im:artist":{label:artist}} = data;
   
  const {label} = data.category.attributes;
  const {label: rights}= data.rights; 
  const {"im:name" :{label:title}}= data;  
  const {"im:price" :{label:price}}= data;       
  const {"im:releaseDate" :{attributes:{label: dateRelease}}}= data;       
  const {"im:image" : [index]} = data;    
  const {href}= data.link.attributes;   
  // 2- change the size of the img because are too small
 const image= index.label.replace(/55x55bb.png/gi, '170x170bb.png');

// 3- return  new obj - with field we need
return {id, label, artist, title, price, image ,href, rights, dateRelease};
}//end formatAPI



Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"Feed iMu",
    feeds:[],
    course: {},
    searchWord: null,
    filteredFeeds: null,
  },

  //// We need these to be able to access
// their values outside of the store module.
 getters :{
  allFeeds: (state) => state.feeds,
  getCourse: (state) => state.course,
  getSearchWord: (state) => state.searchWord,
  getFilteredFeed: (state) => state.filteredFeeds
 },
  /** mutations : responsible of modifying the state - ! no async call 
   *  We use these to update the values of the store.
  */
  mutations: {
    FETCH_DATA:(state, allFeeds)=>{
      state.feeds=allFeeds;
    },
    FILTERED_FEEDS (state, word) {
      if (!(word) || word === '{}') {
          state.searchWord = null
          state.filteredFeeds = null
      } else {
        state.searchWord = word
        state.filteredFeeds = state.feeds.filter((item) => {
          return(
          item.title.toLowerCase().includes(word) || item.artist.toLowerCase().includes(word)
          )//end return
        })//end filter
      }//else
    }//end FILTERED
  },
  actions: {
   async getFeeds({commit}){
      let response= await fetch(baseURL);
      let {feed} = await response.json();
      let feedList = feed.entry.map(item => formatAPI(item));
        commit("FETCH_DATA", feedList)
  },
  FILTERED_FEEDS ({ commit }, word) {
    commit('FILTERED_FEEDS', word)
  }
 
}
});
