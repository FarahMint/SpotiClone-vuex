<template>
  <section>
      
  <h2 v-if="!getFavoriteFeed.length">No selection yet</h2>
  <div class="list__display">
    <feed-item v-for="item in getFavoriteFeed"
      :feed="item"
      :key="item.id"
      @update-selection="toggle"
      :class="{ selected: item.isSelected }"/> 
  </div>
         
  </section>
</template>

<script> 

import {mapGetters,  mapActions} from "vuex";

 import FeedItem from "./FeedItem";
 
export default {
  name:"Playlist",
  components:{FeedItem},
 
  computed:{
    ...mapGetters(["getFavoriteFeed"]),
  },
  methods: {
    ...mapActions(["TOGGLE_FAV"]),
     toggle(index) {
    this.TOGGLE_FAV(index);
    }
  }
}
</script>

<style>

section {
  margin: 5rem 0;
  padding: 2rem 1rem;

}
 .list__display{
  display:grid;
  grid-template-columns:  repeat(4, 1fr);
  grid-gap: 1rem;
  }


.img__container {
  position: relative;
}
.img__container img {
 width: 100%;
  height:100%;
  display: block;
  object-fit: cover;
  transition:  all 0.3s linear;
}

.img__container p {
  position: absolute;
  top: 0;
  left: 0;
  color: #fff;
  font-size: 0.75rem;
  display:none;
}

.img__container:hover {
  cursor:pointer;
  background: rgba(0, 0, 0, 0.8);
}
.img__container:hover  > p{
 display:block;
}

.img__container:hover img {
  opacity: 0.3;
}

.meta.selection svg{
  color:red;
}

.meta.selection svg:hover{
  color:inherit;
}

 

</style>