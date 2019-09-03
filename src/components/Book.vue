<template>
 <div class="list__container">
  <input v-model="search" type="search">
  <input type="button" @click="doSearch" value="Search">
  <br>
  <div v-if="searching"><i>Searching...</i></div>

  
  <div v-if="books.length" >
    <h2>Results</h2>
    <p><i>Click the cover to find similar books...</i></p>
    <div class="allResults">
      <article v-for="book in books"
        :key="book.id" 
        class="bookResult">
        <img :src="book.image_url" :alt="book.title" @click="findSimilar(book)">
        <h3>{{book.title}}</h3>    
      </article>
    </div>
  

    <div v-if="relatedBooks.length">
      <h2>Books Related to {{ selectedBook.title }}</h2>
      <div class="allResults">
        <article 
        v-for="book in relatedBooks" 
        :key="book.id" 
        class="bookResult">
          <img 
          :src="book.image_url" 
          :alt="book.title"
          @click="findSimilar(book)">
          <h3> {{book.title}}</h3>  
        </article>
      </div>
    </div>

  </div> 
</div>
</template>

<script>

import {mapGetters,  
// mapState,
 mapActions 
 } from "vuex";
 

export default {
  name: 'Home', 
 
   data(){
     return{
       search:'',
       selectedBook:null
     }
  },
  computed:{
      ...mapGetters(["books", "relatedBooks", "searching"]),
  
  },
  methods:{
    ...mapActions(['searchBooks','getrelatedBooks']),
    doSearch() {
      if(this.search === '') return;
      this.searchBooks(this.search);
    },
    findSimilar(book) {
      this.selectedBook = book;
      // console.log(this.selectedBook);
      this.getrelatedBooks(book);
    }
  }

}
</script>

<style>
  .list__container{
  padding-top: 2rem;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%; 
 }/* end list container*/

 .allResults{
         display:grid;
  grid-template-columns:  repeat(3, 1fr);
 }
h2{
    font-size: 2rem;
    line-height: 44px;
    font-weight: 900;
    margin: 1.25rem 0;
  }
h3{
    font-size: 1rem;
    font-weight: 100;
  }

 
</style>

/**  STORE FILE FOR BOOK */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books:[],
    relatedBooks:[],
    searching:false
  },

  //// We need these to be able to access
// their values outside of the store module.
 getters :{

     books: state =>  state.books,
    relatedBooks: state=>  state.relatedBooks,
    searching: state =>  state.searching
 },
  /** mutations : responsible of modifying the state - ! no async call 
   *  We use these to update the values of the store.
  */
 mutations:{
  books(state,books) {
    state.books = books;
  },
  relatedBooks(state,books){
     state.relatedBooks = books;
  },
  searching(state,bool) {
    state.searching = bool;
  },
  clearBooks(state) {
    state.books = [];
  },
  clearRelatedBooks(state) {
    state.relatedBooks = [];
  } 
},
actions:{
 async searchBooks(context,term){
    context.commit('searching',true);
    context.commit('clearBooks');
    context.commit('clearRelatedBooks');
    context.searching = true;
    const fetchData= await fetch(`https://openwhisk.ng.bluemix.net/api/v1/web/rcamden%40us.ibm.com_My%20Space/goodreads/search.json?search=${encodeURIComponent(term)}`);
    const resJson =await fetchData.json();

   
      context.commit('books',resJson.result);
      context.commit('searching',false);
  
  },
  async getrelatedBooks({commit},book) {
   commit('clearRelatedBooks');
    console.log('find books similar to '+book.id);
    const data= await fetch(`https://openwhisk.ng.bluemix.net/api/v1/web/rcamden%40us.ibm.com_My%20Space/goodreads/findSimilar.json?id=${encodeURIComponent(book.id)}`);
    const response = await data.json();
  
     commit('relatedBooks',response.result);
   
    
  }
}

});


