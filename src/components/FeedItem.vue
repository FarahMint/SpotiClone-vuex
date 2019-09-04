<template>
  <article> 
    
    <div>
      <div class="img__container" 
      @mouseover="hover = true"
      @mouseleave="hover = false">
        <img 
        v-bind:src="feed.image"
        v-bind:alt="feed.title">

        <transition name="fade">
          <p v-if="hover">{{ feed.title }}</p>
        </transition>

      </div>
      <div class="meta">
        <p>{{ feed.artist }}  </p>
       <span>
 
         <font-awesome-icon 
       icon="heart" @click="addFav(feed)" 
       :class="{ active: isActive }"/>
       </span>

      </div>
    </div>
  </article> 
</template>

<script>

import { mapMutations} from "vuex";

export default {
    name:"feed-item",
     data() {
       return{
         hover: false,
           isActive: false,
       }
  },//data
      /** props from parent FeedsList  */
    props:{
        feed:{
            type:Object,
            required:true,
        }
    },//props
  
     methods:{
         /** go to details page of item targeted */
  ...mapMutations(["FAVORITE_FEEDS"]),
   addFav(item) {
   this.FAVORITE_FEEDS(item);
  this.isActive = true;
    
    }, 
  } //methods
}
</script>
 
<style>
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
}

.img__container:hover {
  cursor:pointer;
  background: rgba(0, 0, 0, 0.8);
}

.img__container:hover img {
  opacity: 0.3;
}

.meta{
      display: flex;
    justify-content: space-evenly;
}
.meta span{
cursor: pointer;
}

    h3, p{
      font-size: 1rem;
      line-height: 20px;
      letter-spacing: .025em;
      font-weight: 700;
      text-transform: lowercase;
    }

.meta svg:hover,
.active {
  color:red;
}
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>

 