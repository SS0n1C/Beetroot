<template>
<div class="wrapper">
<MainTitle></MainTitle>
<MemPage></MemPage>
</div>


</template>

<script>
import MemPage from "@/components/MemPage.vue";
import MainTitle from "@/components/MainTitle.vue"

export default {
  components: {
   MemPage,
   MainTitle,
  }
}
</script>

<style>
.wrapper{
  border:10px black solid;
}
.header{
  background-color: #dbd7d7;
  padding:20px auto;
  border: 10px rgb(148, 148, 151) outset;
}
</style>