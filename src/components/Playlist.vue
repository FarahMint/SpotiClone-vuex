<template>
<div class="coming">

<h2 v-if="!getFavoriteFeed">No selection yet</h2>
  <div class="list__display">
      <feed-item 
         v-for="item in getFavoriteFeed"
          :feed="item"
          :key="item.id"
          @click="removeFav(item)"/> 
    </div>

</div>
</template>

<script>

import {mapGetters,  mapActions} from "vuex";
 

/** import component  */
  import FeedItem from "./FeedItem";
 
export default {
    name:"Playlist",
    components:{ "feed-item": FeedItem }, 
     computed:{
    ...mapGetters(["getFavoriteFeed"]),
   },
   methods: {
   ...mapActions(["REMOVE_FROM_FAVORITE"]),
    removeFav(item) {
      console.log(item)
      this.REMOVE_FROM_FAVORITE(item);
    },
  }
}
</script>

<style>

.coming {
  margin-top: 5rem;
}

</style>