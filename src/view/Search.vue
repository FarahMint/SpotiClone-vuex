<template>
<section>

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
          :key="item.id"
          @update-selection="toggle"/> 
    </div>

</section>
</template>

<script>
import {mapGetters,  mapState, mapActions } from "vuex";

/** import component  */
import FeedItem from "../components/FeedItem";

export default {
    name:"Search",
    methods:{
     ...mapActions(['FILTERED_FEEDS', "TOGGLE_FAV"]),
       toggle(index) {
    this.TOGGLE_FAV(index);
    }
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
</style>