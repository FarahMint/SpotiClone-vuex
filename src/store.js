import Vue from 'vue'
import Vuex from 'vuex'

import router from '@/router'
//https://stackoverflow.com/questions/42178851/getting-router-params-into-vuex-actions

import {formatAPI } from "./helper"


const baseURL =`https://itunes.apple.com/us/rss/topalbums/limit=100/json`;


let favoriteFeeds= window.localStorage.getItem("selection")

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title:"Feed iMu",
    feeds:[],
    feed: {},
    searchWord: null,
    filteredFeeds: null,
    favoriteFeeds:favoriteFeeds ? JSON.parse(favoriteFeeds): [],
    favoriteCount:0,
  
    isFeedsLoading: false,
    appError: null,
  },

  //// We need these to be able to access
// their values outside of the store module.
 getters :{
  allFeeds: (state) => state.feeds,
  getFeed: (state) => state.feed,
  getSearchWord: (state) => state.searchWord,
  getFilteredFeed: (state) => state.filteredFeeds,
  getFavoriteFeed: (state) => state.favoriteFeeds,
  getFavoriteCount: (state) => state.favoriteFeeds.length,
  
  isFeedsLoading: (state) =>  state.isFeedsLoading,

 },
  /** mutations : responsible of modifying the state - ! no async call 
   *  We use these to update the values of the store.
  */
  mutations: {
    FETCH_DATA(state, allFeeds){
      state.feeds=allFeeds;
    },
    FETCH_SINGLE_DATA(state){
      state.feed = state.feeds.find(item => item.id === router.currentRoute.params.id);
    },
    FETCH_FEED_SELECTED(state, feed){
    state.feed= feed;
    this.commit("SAVE_DATA");
   }, //end  geet Feed
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
    },//end FILTERED

    // FAVORITE_FEEDS(state, payload) {
    FAVORITE_FEEDS(state, item) {
      //1- checking if the  element is included in state.favoriteFeeds
     if(!state.favoriteFeeds.includes(item)) {
      //2- adding the element only if it's not already in the array.
      state.favoriteFeeds.push(item);
      
    }
    this.commit("SAVE_DATA");
    },//end FAVORITE

    REMOVE_FROM_FAVORITE(state, payload) {
      //1- find the index of the payload item inside the state.favoriteFeeds array 
      //2- remove the item starting from this index (will remove only the payload item)
      state.favoriteFeeds.splice(state.favoriteFeeds.indexOf(payload), 1);
      this.commit("SAVE_DATA");
  },
 
    IS_FEEDS_LOADING: (state, action) => {
      state.isFeedsLoading = action
    },
    ERROR: (state, message) => {
      state.appError = message
    },
    

    SAVE_DATA:(state)=>{
  window.localStorage.setItem("selection", JSON.stringify(state.favoriteFeeds));
    },

    TOGGLE_FAV(state, index) {
      let feed = state.feeds.find(feed => feed.id === index);  
     Vue.set(feed, "isSelected", !feed.isSelected);
    //  Vue.set(state.feeds[index], "isSelected", !state.feeds[index].isSelected);
   
    feed.isSelected ?   
        this.commit("FAVORITE_FEEDS", feed) :
        this.commit("REMOVE_FROM_FAVORITE", feed)

      
    this.commit("SAVE_DATA");
    }
  },
  actions: {
   async getFeeds({commit}){
     commit("IS_FEEDS_LOADING", true)
     try{
       let response= await fetch(baseURL);
       let {feed} = await response.json();
       let feedList = feed.entry.map(item => formatAPI(item));

       commit("IS_FEEDS_LOADING", false);
      commit("FETCH_DATA", feedList);
         
        }catch(err){
          commit("IS_FEEDS_LOADING", false);
          commit("ERROR", err);
        }
  },
    FETCH_SINGLE_DATA({ commit }) {
    commit('FETCH_SINGLE_DATA')
  },
  FILTERED_FEEDS({ commit }, word) {
    commit('FILTERED_FEEDS', word)
  },

 TOGGLE_FAV({commit}, payload){
commit("TOGGLE_FAV", payload);
 },
 
}
});
