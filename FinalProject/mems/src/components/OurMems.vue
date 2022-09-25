<template>
<div class="ourMems">
<vueper-slides
class="no-shadow"
  :visible-slides="3"
  :arrows="true"
  :bullets="false"
  :slide-ratio="1 / 4"
  :gap="3"
  :dragging-distance="70"
  :breakpoints="breakpoints">
    <vueper-slide v-for="(slide, i) in mem" :key="i" :image="slide.image">
    <template #content>
        <div class="ourMems__item--likes">
        <div class="score">
            <div class="score__logo">
                <svg>
                <use xlink:href="@/assets/img/sprite.svg#heart"></use>
                </svg>
            </div> 
            <div class="score__num">{{slide.likes}}</div>
        </div>
    <div class="likeInput" @click="slide.likes += 1">
        <svg>
            <use xlink:href="@/assets/img/sprite.svg#like"></use>
        </svg>
    </div>
    </div>
    </template>
    <div class="div">dfsf</div>
    </vueper-slide>
</vueper-slides>
</div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'    
export default {
    components: { VueperSlides, VueperSlide },
data(){
    return{
        liketest:100,
        mem:[
            {id: 1,image: require("@/assets/img/ourMems/test.jpg"),likes:2,},
            {id: 2,image: require("../assets/img/ourMems/test2.jpg"),likes:22,},
            {id: 2,image: require("../assets/img/ourMems/test3.jpg"),likes:3,},
            {id: 3,image: require("../assets/img/ourMems/test4.jpg"),likes:5,},


        ],
      slides: [
        {title: 'Slide #1',content: 'Slide 1 content.'},
        {title: 'Slide #2',content: 'Slide 2 content.'},
        {title: 'Slide #1',content: 'Slide 1 content.'},
        {title: 'Slide #2',content: 'Slide 2 content.'},
        {title: 'Slide #1',content: 'Slide 1 content.'},
        {title: 'Slide #2',content: 'Slide 2 content.'},
      ],
      breakpoints: {
        1200: {
          visibleSlides: 2,
          arrows: false,
          bullets:true,
          slideRatio: 1 / 3,
        }, 
        665:{
          visibleSlides: 1,
          arrows: true,
          bullets:false,
        }
      }, 
    }
  }
}
</script>

<style lang="scss">
.vueperslide{
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-size: cover;

    @media(max-width:650px){
      background-size:contain;

    }
   
    
}
.vueperslides__parallax-wrapper{
  height: 350px;
}

.vueperslides__arrow svg{
    stroke: red;
    stroke-width:2px;
    width: 50px;
    height: 100px;
}
.vueperslides__bullet{
  margin: 10px 10px;
}
</style>

