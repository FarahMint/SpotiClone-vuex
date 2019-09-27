import Vue from "vue";
import Router from "vue-router";

/** import pages */
import Showcase from "./view/Showcase";
import Home from "./view/Home";
import Feed from "./view/Feed";
import Search from "./view/Search";
import Playlist from "./view/Playlist";
import NotFound from "./components/NotFound";


/** setup route */
Vue.use(Router);


export default new Router({
    mode:"history",
    routes:[
      {path:"/", component:Showcase},
      {path:"/featured", component:Home, name: 'Home'},
      {path:"/search", component:Search , name:"Search" },
      {path:"/favorite", component:Playlist, name:"Playlist"},
      {path:"/feed/:id", component:Feed, name: 'Feed'},
      {path:"/**/**", component:NotFound},
        
    ]
})