<template>
  <div class="wrapper">
    <MainTitle></MainTitle>
    <NewPage></NewPage>
  </div>
</template>

<script>

import MainTitle from "@/components/MainTitle.vue"
import NewPage from "@/components/NewPage.vue";
export default {
components:{
    MainTitle,
    NewPage,
}
}
</script>

<style>
.wrapper{
  border:10px black solid;
  min-height: 100vh;
}
.header{
  background-color: #dbd7d7;
  padding:20px auto;
  border: 10px rgb(148, 148, 151) outset;
}
</style>