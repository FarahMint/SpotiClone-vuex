<template>
  <div id="app">
    <Header/>

    <!-- route outlet -->
   <!-- component matched by the route will render here -->
    <router-view></router-view>
    <!-- end route outlet -->

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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  max-width: 1200px;
  width:100vw;
  position:relative;

}

  .selected svg{
color: red;
}
</style>
