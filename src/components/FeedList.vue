<template>
  <section>
  <div class="list__container">   
    <h1 v-if="allFeeds.length > 0">Top playlists...</h1>
    <!-- <h1 v-else>Nothing found, please Search Again</h1> -->
    <div class="list__display">
      <feed-item 
          v-for="item in allFeeds"
          :feed="item"
          :key="item.id"
         @update-selection="toggle"
           :class="{ selected: item.isSelected }"
     /> 
    </div>
  </div>
  </section>
</template>

<script>
import {mapGetters, mapActions} from "vuex";
   

/** import component  */
 import FeedItem from "./FeedItem";
 
 
export default {
  name:"FeedsList",
 components:{ "feed-item": FeedItem   },  
  computed:{
    ...mapGetters(["allFeeds"]),
  
  },methods:{
        ...mapActions(["TOGGLE_FAV"]),
     toggle(index) {
      this.TOGGLE_FAV(index);
    },
  }

}
</script>

 <style> 
 .list__container{
  width: 100%; 
 }/* end list container*/

   h1{
    font-size: 2rem;
    line-height: 44px;
    font-weight: 900;
    margin: 1.25rem 0;
  }

   .list__display{
 display:grid;
grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  grid-gap:1rem;
  }




</style>