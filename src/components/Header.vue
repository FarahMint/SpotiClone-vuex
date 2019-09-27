<template>
  <header class="navbar navbar-highlight-green navbar-fixed-top" role="banner">
    <div class="navbar-header">
        <router-link to="/" class="navbar-brand">
          <span class="navbar-logo">SpotiClone</span>
        </router-link>
  
        </div>
            <nav class="collapse" role="navigation">
        
                <ul class="navbar-nav">
                    <li>
                     <router-link to="/featured">Home</router-link>
                       
                    </li>
                    <li>
                     <router-link to="/search">search</router-link>
                       
                    </li>       
                    <li class="badge">
                        <span  v-if="getFavoriteCount>0">  {{getFavoriteCount}}</span>
                      
                     <router-link to="/favorite">selection</router-link>
                    </li>
                </ul>
            </nav>
    </header>
</template>

<script>

import {mapGetters} from "vuex";
 
export default {
    name:"Header",
     computed:{
    ...mapGetters(["getFavoriteCount"]),
   
  },
}
</script>

<style scoped>
header{
    display:flex;
}

.navbar {
    position: relative;
    min-height: 80px;
    margin-bottom: 0;
    border: 1px solid transparent;
    display:flex;
    justify-content: space-around;
    align-items: center;

    background-color: rgb(0,0,0);
    border-color: #222326;
}

.navbar-highlight-green ,
.navbar-brand{
    color: #1ED760;
}

.navbar-fixed-top {
    top: 0;
    border-width: 0 0 1px;
    position: fixed;
    right: 0;
    left: 0;
    width:100%;
    height:auto;
    z-index: 1030;
}
 
 nav ul{ 
    display:flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
 }

.nav >  li {
    position: relative;
    display: block;
}

.navbar-nav > li > a {
    padding: 28px 17px;
    color:#fff;
}

.badge {
        position: relative;
 
}
.badge span{
    position: absolute;
    right: 0;
    top: -6px;
    display: block;
    border-radius: 50%;
    background-color:#fff;
    width: 20px;
    height: 20px;
}

     /* screen with less than 768px*/
    @media screen and (max-width: 360px) {
      header{
        flex-direction: column;
      }
    }
 
</style>