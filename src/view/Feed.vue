<template>
 
<section>
  <div class="container__img">
    <img :src="getFeed.image || ''" :alt="getFeed.title" >
  </div>
  <div class="card-text">
    <h5>{{ getFeed.title }}</h5>
    <p> {{ getFeed.artist}} - {{ getFeed.label }}</p>
   <p> Released on {{ getFeed.dateRelease}}</p> 
   <a title="checkout on iTunes" :href="getFeed.href" target="_blank" role="button">
    listen on apple music
     <font-awesome-icon icon="music" aria-hidden="true"> </font-awesome-icon>
   </a>  
  </div>
  

  <div class="line"></div>
 </section>
</template>


<script>
 import {mapGetters} from "vuex";
 /**btn component */
 

export default {
    name: "Feed",
     
   computed:{
 ...mapGetters(["getFeed"]),
  },
}
</script>


<style scoped>

 section{
   display:flex;
   flex-wrap:wrap;
   justify-content: space-around;
 }

a[role="button"]{
    border: 2px solid #da0f47;
    background: 0 0;
    color: #da0f47;
    padding: 7px 10px 5px;
    display: block;
    width:100%;
    min-width: 30px;

    font-size: 13px;
    letter-spacing: -.005em;
    text-decoration: none;
    white-space: nowrap;
}

.card-text{
  display:flex;
  flex-direction: column;
  justify-content:center;

}

    .line{
      margin-top: 2rem;
      border-bottom: 1px solid #ddd;
    }


    /* screen with less than 768px*/
    @media screen and (max-width: 768px) {
        .card-body{
          text-align: center;
          margin-top: 1rem;
      }

      .playlist{
        margin: 5rem auto;  
      }
    }



</style>
 