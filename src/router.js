import Vue from "vue";
import Router from "vue-router";

/** import pages */
import Showcase from "./components/Showcase";
import Home from "./components/Home";
import Search from "./components/Search";
import Playlist from "./components/Playlist";
// import Feed from "./components/Search";


/** setup route */
Vue.use(Router);


export default new Router({
    mode:"history",
    routes:[
        {path:"/", component:Showcase},
        {path:"/featured", component:Home},
      {path:"/search", component:Search },
      {path:"/yourplaylist", component:Playlist},
        // {path:"/feed/:id", component:Feed,  name: 'Feed'},
        
    ]
})