<template>
 <article class="newsField">
    <div class="newsField__title">
        <h2>Mem News</h2>
    </div>
    <div class="newsArea">
    <div class="news" v-for="test in newsInfo" :key="test.id">
        <div class="news__title">{{test.title}}</div>
        <div class="news__img">
            <img :src="test.image" alt="">
        </div>
        <div class="news__txt">{{test.txt}}</div>
        <div class="news__link" @click="this.$router.push('/news')">mems</div>
    </div>
    </div>
    <div class="newsVideo__area">
        <div class="news__video">
            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/n8bqxhAmyKA?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    </div>
 </article>
</template>

<script>
export default {
    data(){
        return{
            show: true,
            test: " ",
            newsInfo:[
                {id:1,image: require("@/assets/img/news/livsi.jpg"),title:"Doc. Livsi capture Tik Tok",txt: "New main stream already in treather island, Let's see what will come of it"},
                {id:2,image: require("@/assets/img/news/batman.jpg"),title:"Whos your dady?",txt: "Who kill kenny? Or why good guy never have family"},
                {id:3,image: require("@/assets/img/news/pig.jpg"),title:"Evacuation is new trend",txt: "If you don't want to do anything, just run away"},
            ]
        }
},
    methods:{
       
    }

}
</script>

<style>
</style>