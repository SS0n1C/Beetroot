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
    <div class="api__img--picture">
      <img :src="testIMG" id="start">
    </div>
  </div>
</div>

</template>

<script>

export default {

data(){
  return{
    testIMG: ' ',
    keyword: " ",

    
    

  }
},
methods:{

  test() {
    // const options = {
    //   method: 'GET',
    //   headers: {
		// 'X-RapidAPI-Key': '7541cfe474msh5e42f59ab0e1294p153af3jsnf35c59e5af66',
		// 'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
	  //   }
  
    // };
    async function apisyn() {
      let URL = "https://api.humorapi.com/memes/random?keywords=joke&api-key=488b205a6044402f8b084ee7f066771b`"
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
      let URL = `https://api.humorapi.com/memes/random?keywords=${testing}&api-key=488b205a6044402f8b084ee7f066771b`;
      const res = await fetch(`${URL}`);
      const data = await res.json();
      console.log(data)
      return data
    }
    apisyn().then((test)=>{
      this.testIMG = test.url
    })
}
},
mounted() {
    window.addEventListener('load', () => {
    //   const options = {
    //   method: 'GET',
    //   headers: {
		// 'X-RapidAPI-Key': '7541cfe474msh5e42f59ab0e1294p153af3jsnf35c59e5af66',
		// 'X-RapidAPI-Host': 'humor-jokes-and-memes.p.rapidapi.com'
	  //   }
  
    // };
    
  async function apisyn() {
      let URL = `https://api.humorapi.com/memes/random?keywords=rocket&api-key=488b205a6044402f8b084ee7f066771b`;
      const res = await fetch(`${URL}`);
      const data = await res.json();
      console.log(data)
      return data
    }
    apisyn().then((test)=>{
      this.testIMG = test.url
    })
    })
},
}
</script>

<style lang="scss">

</style>