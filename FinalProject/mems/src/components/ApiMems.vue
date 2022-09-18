<template>
<div class="apiMem-field">
  <div class="search-Field">
    <div class="search-Field__search">
      <input type="search" @click="test" placeholder="What we looking?">
    </div>
    <div class="search-Field__button">
      <button type="submit">SEARCH</button>
    </div>
  </div>
  <div class="api__img">
    <img :src="testIMG">
    <!-- <vueper-slides
  ref="vueperslides1"
  :touchable="false"
  fade
  :autoplay="false"
  :bullets="false"
  fixed-height="500px">
  <vueper-slide v-for="(slide, i) in testIMG" :key="i" :image="slide">
  </vueper-slide>
   </vueper-slides> -->

  </div>
</div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'        
import api from "@/api.js"

export default {
api,
components: { VueperSlides, VueperSlide },
data(){
  return{
    testIMG: ' '
  }
},
methods:{
  test() {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '7541cfe474msh5e42f59ab0e1294p153af3jsnf35c59e5af66',
        'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
      }
    };
    async function apisyn() {
      let URL = "https://humor-jokes-and-memes.p.rapidapi.com/memes/random?keywords=window&number=3&media-type=image&keywords-in-image=false&min-rating=4"
      const res = await fetch(`${URL}`, options);
      const data = await res.json();
      console.log(data)
      return data
    }
    apisyn().then((test)=>{
      this.testIMG = test.url
    })
  },
}
}
</script>

<style>

</style>