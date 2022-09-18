<template>
  <div class="wrapper">
  <div class="conteier">
  <div class="gird-net">
    <div class="grid-net__item"></div>
    <div class="grid-net__item"><slot><MainTitle/></slot></div>
    <div class="grid-net__item">
      <LoginInput/>
      <OurMems/>
    </div>
    <div class="grid-net__item">
      <ApiMems/>
    </div>
    <div class="grid-net__item"></div>
    <div class="grid-net__item">
      <FooterBlock/>
    </div>
  </div>
  </div>
  </div>
</template>

<script>
  import MainTitle from "@/components/MainTitle.vue"
  import LoginInput from "@/components/LoginInput.vue"
  import OurMems from "@/components/OurMems.vue"
  import Apimems from "@/components/ApiMems.vue"
  import ApiMems from "@/components/ApiMems.vue"
  import FooterBlock from "@/components/footerBlock.vue"
  export default {
  components: {
    MainTitle,
    LoginInput,
    OurMems,
    Apimems,
    ApiMems,
    FooterBlock,
}
}
</script>

<style lang="scss">

</style>