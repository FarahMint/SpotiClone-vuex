<template>
  <div class="wrap">
  <section>
    <div class="hero hero-home simplified">
      <div class="hero-home-bg-cover"></div>
      <div class="container container-simplified">
        <div class="row row-simplified">
          <h1>Music for everyone.</h1>
          <h4>Most recent top chart</h4>
            <router-link to="/featured"  role="button"  class="btn btn-green btn-simplified js-goto-signup js-button-hero-get-free"> GO SPOTICLONE FREE</router-link>
        </div>
      </div>
    </div>
  </section>
    
      </div>
</template>

<script>
 

export default {
    name:"Showcase",
  

}
</script>

<style scoped>

.wrap{
background-color: #F037A5;
background: -webkit-gradient(linear, left top, left bottom, color-stop(-60%, #F037A5), color-stop(140%, #FAE62D));
background: linear-gradient(#F037A5 -60%, #FAE62D 140%);
    width: 100vw;
}
/* CONTAINER */
.container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
}
/* CONTAINER */


.simplified {
    display: flex;
    flex-direction: row;
}

.hero {
    color: #FFF;
    position: relative;
    overflow: hidden;
}
 

.simplified .hero-home-bg-cover {
    width: 1610px;
    height: 1523px;
    background: url("../assets/hero-burst-mobile.svg") no-repeat;
    background-position: top -410px center;
    -webkit-transform: translate(-50%, 0%);
    -ms-transform: translate(-50%, 0%);
    transform: translate(-50%, 0%);
        position: absolute;
    left: 50%;
}


.hero-home .container {
    position: relative;
}
.container-simplified {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    padding-top: 75px;
    padding-bottom: 75px;

    padding-top: 250px;
    padding-bottom: 250px;
 
}

.index-homepage .simplified .row-simplified {
    text-align: center;
    margin: 0 auto;
    z-index: 1;
}

 h1 {
    font-size: 80px;
    font-weight: 900;
    letter-spacing: -0.04em;
    line-height: 1.15;
    margin-top: 0;
}

h4, p.lead {
    font-size: 18px;
    font-weight: 400;
}

p, h4 {
    margin: .5em 0 1em;
}

.index-homepage .simplified .btn.btn-simplified {
    margin-top: 16px;
}

.btn-green, .btn-primary,.btn-primary {
    color: #FFF;
    background-color: #1DB954;
}


.btn{
    font-size: 14px;
    border-radius: 500px;
    padding: 16px 48px 18px;
    letter-spacing: 2px;
    min-width: 160px;
    text-transform: uppercase;
    display: inline-block;
    margin-bottom: 0;
    font-weight: 700;
    text-align: center;
    cursor: pointer;
    line-height: 1.5;
}

 

.btn-green {
    color: #FFF;
    background-color: #1DB954;
}

 


 

</style>