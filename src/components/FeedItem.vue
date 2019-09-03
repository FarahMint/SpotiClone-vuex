<template>
  <article> 
    
    <div>
        <img 
        v-bind:src="feed.image"
        v-bind:alt="feed.title">
      <div>
        <p>{{ feed.artist }}</p>

      </div>
    </div>
  </article> 
</template>

<script>
export default {
    name:"feed-item",
      /** props from parent FeedsList  */
    props:{
        feed:{
            type:Object,
            required:true,
        }
    },
     methods:{
         /** go to details page of item targeted */
 
    },//methods 
}
</script>
 
<style scoped>
 .card {
  background-color: transparent;
  border: none;
  border-radius: 0.25rem;
  cursor:pointer;
  text-align: center;
 }/**end card*/

   .card-body {
    padding: 0;
    }

    .col-lg-3, .col-md-4 {
      margin-bottom: 1rem!important;
    }

    h3, p{
      font-size: 1rem;
      line-height: 20px;
      letter-spacing: .025em;
      font-weight: 700;
      text-transform: lowercase;
    }


</style>

 