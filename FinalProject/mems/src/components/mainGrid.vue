<template>
  <div class="wrapper">
  <div class="conteier">
  <div class="gird-net">
    <div class="grid-net__item" id="topSide"> <NavVue></NavVue></div>
    <div class="grid-net__item"><slot><MainTitle/></slot></div>
    <div class="grid-net__item">
      <LoginInput/>
      <OurMems/>
    </div>
    <div class="grid-net__item">
      <ApiMems/>
    </div>
    <div class="grid-net__item">
      <News/>
    </div>
    <div class="grid-net__item">
      <FooterBlock/>
    </div>
    <a href="#topSide">
    <div class="anchorToTop">
      <svg>
        <use xlink:href="@/assets/img/sprite.svg#arrowTop"></use>  
      </svg>
    </div>
    </a>
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
  import NavVue from "@/components/NavVue.vue"
  import News from "@/components/News.vue"

  export default {
  components: {
    MainTitle,
    LoginInput,
    OurMems,
    Apimems,
    ApiMems,
    FooterBlock,
    NavVue,
    News,
}
}
</script>

<style lang="scss">

</style>