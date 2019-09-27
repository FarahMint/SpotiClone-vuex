<template>
  <div id="app">
    <div class="wrapper">
    <Header/>

    <!-- route outlet -->
   <!-- component matched by the route will render here -->
    <router-view></router-view>
    <!-- end route outlet -->
    </div>

    <Footer/>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'app',
  components: {
 Header,
  Footer
  },
  async created(){
    this.$store.dispatch("getFeeds")
  }
}
</script>

<style>
*{
  margin:0;
  padding:0;
  box-sizing: border-box;
}

ul{
    margin:0;
}

li{
    list-style-type: none;
}
a{
    text-decoration:none;
}


h3{
    margin-top:2rem; 
}
p{
    margin-bottom:2rem; 
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width:100%;
  margin:0 auto;
  position:relative;
}

.wrapper{
    width:100%;
    min-height: calc(100vh - 70px);
    margin:0 auto;
}

section {
    padding: 5rem 1rem;
    margin-top: 80px;
}




  .selected svg{
color: red;
}
</style>
