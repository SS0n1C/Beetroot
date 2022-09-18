<template>
  <div class="app">
    <MainGrid 
    v-if="!preloaders"
    />
    <Preload
    v-else
    />
    <ModalWindow
    v-if="cookieChecker" 
    v-model:show="closeModal"/>
  </div>  
</template>
<script>

import MainGrid from "./components/mainGrid.vue";
import ModalWindow from "@/components/ModalWindow.vue";
import Preload from "@/components/preload.vue"



export default{
  components: {
    MainGrid,
    ModalWindow,
    Preload,
    
},
data(){
  return{
    closeModal: true,
    cookieChecker: document.cookie == "",
    preloaders: false,
  }
},
methods:{
 
},
}
</script>
<style>
body {
    background-image: url("./assets/img/brick.png");
    height: 100%;
  }
  
  img {
    width: auto;
    height: 100%;
    margin: 0 auto;
  }

</style>