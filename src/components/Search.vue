<template>
<div class="list__container">

   <input 
   type="search"
    v-model="searchWord"
    placeholder="Start typing..."
    required />
     <h3>Search SpotiClone</h3> 
 <p>Find your favorite songs, artists,and  albums.</p>


 <div class="list__display">
      <feed-item 
         v-for="item in getFilteredFeed"
          :feed="item"
          :key="item.id"/> 
    </div>

</div>
</template>

<script>
import {mapGetters,  mapState, mapActions } from "vuex";

/** import component  */
import FeedItem from "./FeedItem";

export default {
    name:"Search",
    methods:{
     ...mapActions(['FILTERED_FEEDS']),
  },
  components:{ "feed-item": FeedItem }, 
 computed: {
   ...mapState( ["searchWord" ]),
   ...mapGetters(["allFeeds", "getFilteredFeed"]),
   searchWord: {
      get () {
        return this.$store.state.searchWord
      },
      set (value) {
        this.FILTERED_FEEDS(value);
      }
    },
}
}
</script>

<style >
input{
    height: 87px;
    width: 100%;
    border:1px solid rgba(0,0,0,.6)
    /* background-color: rgba(0,0,0,.6); */
}

input::placeholder{
font-size: 2rem;
font-weight:900;
}
 .list__container{
  padding-top: 2rem;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%; 
height:100vh;
 }/* end list container*/

   h1{
    font-size: 2rem;
    line-height: 44px;
    font-weight: 900;
    margin: 1.25rem 0;
  }

h3{
    margin-top:2rem; 
}
p{
    margin-bottom:2rem; 
}
  .list__display{
         display:grid;
  grid-template-columns:  repeat(4, 1fr);
  }

</style>