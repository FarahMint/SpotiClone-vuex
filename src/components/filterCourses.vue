<template>
 <div class="list__container">
 <h1>Filtering Courses</h1>
  <input type="search" v-model="searchWord" required />
  <p>getSearchWord: {{ searchWord }} <p/>
  <ul>
    <li 
    v-for="course in   getFilteredCourse ||allCourses"
    :key="course.id"> {{ course.name }}</li>
  </ul>
</div>
</template>

<script>

import {mapGetters,  mapState, mapActions } from "vuex";
 

export default {
  name: 'Home', 
   methods:{
     ...mapActions(['FILTERED_COURSES']),
  },
 computed: {
   ...mapState( ["searchWord" ]),
   ...mapGetters(["allCourses", "getFilteredCourse", "searching"]),
    
    // filteredCourses(){
    //   try {
    //     let a = (this.$store.getters.getFilteredCourse || this.$store.getters.allCourses)
    //     console.log(a)
    //     return a
    //   } catch (e) {
    //     console.log(e)
    //   }
    // },
    searchWord: {
      get () {
        return this.$store.state.searchWord
      },
      set (value) {
        this.FILTERED_COURSES(value);
      }
    }
  },
 
}
</script>

<style>
  .list__container{
  padding-top: 2rem;
  margin: 0 auto;
  max-width: 1200px;
  width: 90%; 
 }/* end list container*/

 .allResults{
         display:grid;
  grid-template-columns:  repeat(3, 1fr);
 }
h2{
    font-size: 2rem;
    line-height: 44px;
    font-weight: 900;
    margin: 1.25rem 0;
  }
h3{
    font-size: 1rem;
    font-weight: 100;
  }

 
</style>


/** STORE */

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
 state:{
  courses: [{
    "name": "Administration",
    "slug": "administration",
    "type": "bachelor",
    "time": 8,
    "priceFull": "387,00",
    "priceOff": "205,00"
  },
  {
    "name": "Accounting",
    "slug": "accounting",
    "type": "bachelor",
    "time": 8,
    "priceFull": "387,00",
    "priceOff": "205,00"
  },
  {
    "name": "Economic",
    "slug": "economic",
    "type": "bachelor",
    "time": 8,
    "priceFull": "387,00",
    "priceOff": "205,00"
  },
  {
    "name": "Engeneering",
    "slug": "engenering",
    "type": "bachelor",
    "time": 10,
    "priceFull": "554,00",
    "priceOff": "293,00"
  }],
  course: {},
  searchWord: null,
  filteredCourses: null,
 },

  //// We need these to be able to access
// their values outside of the store module.
getters: {
  allCourses: (state) => state.courses,

  getCourse: (state) => state.course,

  getSearchWord: (state) => state.searchWord,

  getFilteredCourse: (state) => state.filteredCourses
},
  /** mutations : responsible of modifying the state - ! no async call 
   *  We use these to update the values of the store.
  */
 mutations: {
  SET_COURSE (state, course) {
    state.course = course
  },
  FILTERED_COURSES (state, word) {
    if (!(word) || word === '{}') {
        state.searchWord = null
        state.filteredCourses = null
    } else {
      state.searchWord = word
      state.filteredCourses = state.courses.filter((course) => {
        return course.slug.toLowerCase().includes(word) || course.name.toLowerCase().includes(word) || course.type.toLowerCase().includes(word)
      })
    }
  }
},
actions: {
  SET_COURSE ({ commit }, course) {
    commit('SET_COURSE', course)
  },
  FILTERED_COURSES ({ commit }, word) {
    commit('FILTERED_COURSES', word)
  }
}
 

});
