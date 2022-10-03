<template>
<div class="conteier">
<div class="newsPageField" id="test">
<div class="newsPageItem"  v-for="news in newsInfo" :key="news">
    <div class="newsPageItem__img">
        <img :src="news.image" alt="">
    </div>
    <div class="newsPageItem__content">
        <div class="newsPageItem__content--title">{{news.title}}</div>
        <div class="newsPageItem__content--txt">{{news.txt}}
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam vel possimus id dolorem sequi. Eos nostrum dolor suscipit iure, sed quidem dignissimos quisquam perferendis est sapiente officia ratione molestias facere.
            </p>
        </div>
    </div>
</div>
</div>
</div>
</template>

<script>
export default {
data(){
    return{
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

<style lang="scss">
.header{
    background-color:  wheat;
}

</style>