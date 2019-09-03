<template>
  <header class="navbar navbar-highlight-green navbar-fixed-top" role="banner">
  <div class="container">
    <div class="navbar-header">
        <router-link to="/" class="navbar-brand">
          <span class="navbar-logo">SpotiClone</span>
        </router-link>
  
        </div>
            <nav class="collapse navbar-collapse" id="navbar-nav" role="navigation">
        
                <ul class="nav navbar-nav navbar-right nav-main">
                    <li>
                     <router-link to="/featured">Home</router-link>
                       
                    </li>
                    <li>
                     <router-link to="/search">search</router-link>
                       
                    </li>       
                    <li>
                     <router-link to="/yourplaylist">create playlist</router-link>
                
                    </li>
                    <!-- <li role="separator" class="divider"></li>
                    <li class="alternate sidepanel-item-small ">
                        <a href="/uk/signup/" id="nav-link-sign-up">Sign up</a>
                    </li>

                    <li class="alternate sidepanel-item-small">
                        <a href="/uk/login/" id="header-login-link" class="user-link">
                        <span class="user-text navbar-user-text">Log In</span>
                        </a>
                    </li> -->
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
export default {

}
</script>

<style scoped>

ul{
    margin:0;
}

li{
    list-style-type: none;
}
a{
    text-decoration:none;
}

.navbar {
    position: relative;
    min-height: 80px;
    margin-bottom: 0;
    border: 1px solid transparent;

    background-color: rgba(0,0,0);
  
    border-color: #222326;

    display:flex;
    justify-content: space-around;
    align-items: center;
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
    z-index: 1030;
}
 
 .container, nav ul{
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


 
</style>