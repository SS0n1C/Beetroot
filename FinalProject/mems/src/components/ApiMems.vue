<template>
<div class="apiMem-field">
  <div class="search-Field">
    <div class="search-Field__button">
      <button type="submit" @click="test">RANDOM</button>
    </div>
    <div class="search-Field__search">
      <input type="search" placeholder="What we looking?" 
       v-model="keyword">
      
    </div>
    <div class="search-Field__button">
      <button type="submit" @click="searchButton">SEARCH</button>
    </div>
  </div>
  <div class="api__img">
    <img :src="testIMG" id="start">
  </div>
</div>

</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css' 


export default {
components: { VueperSlides, VueperSlide },
data(){
  return{
    testIMG: ' ',
    keyword: " ",

    
    

  }
},
methods:{
  test() {
    // console.log("sdff")
    const options = {
      method: 'GET',
      headers: {
    // //     // key:c5a6949651ae41e0a44f513db5924261
    // //       // key:"7541cfe474msh5e42f59ab0e1294p153af3jsnf35c59e5af66"
    // //     'X-RapidAPI-Key': 'c5a6949651ae41e0a44f513db5924261',
    // //     'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
      }
    };
    async function apisyn() {
      let URL = "https://api.humorapi.com/memes/random?&api-key=c5a6949651ae41e0a44f513db5924261"
      const res = await fetch(`${URL}`);
      const data = await res.json();
      console.log(data)
      return data
    }
    apisyn().then((test)=>{
      this.testIMG = test.url
    })
    
  },
  searchButton(){
  let testing = this.keyword
  console.log(this.keyword)

  async function apisyn() {
      let URL = `https://api.humorapi.com/memes/search?keywords=${testing}&api-key=c5a6949651ae41e0a44f513db5924261`;
      const res = await fetch(`${URL}`);
      const data = await res.json();
      console.log(data)
      return data
    }
    apisyn().then((test)=>{
      try{
      this.testIMG = test.url
      }
      catch (eror){
            alert("NOT FOUND")
      }
    })
}

}
}
</script>

<style lang="scss">

</style>