<template>
  <MainGrid />
    <ModalWindow
    v-if="cookieChecker" 
    v-model:show="closeModal"/>
</template>

<script>
import ModalWindow from "@/components/ModalWindow.vue";
import MainGrid from "@/components/mainGrid.vue"
export default{
  name: 'HomeView',
  components: {
    ModalWindow,
    MainGrid,
    
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

</style>
