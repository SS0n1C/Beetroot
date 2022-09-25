<template>
  <div class="memPage">
    <div class="conteier">
        <div class="memField" v-for="ix in mem">
            <div class="memField__item">
                <img :src="ix.image" alt="">
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
data(){
    return{
        mem:[
            {id: 1,image: require("@/assets/img/ourMems/test.jpg"),likes:2,},
            {id: 2,image: require("../assets/img/ourMems/test2.jpg"),likes:22,},
            {id: 2,image: require("../assets/img/ourMems/test3.jpg"),likes:3,},
            {id: 3,image: require("../assets/img/ourMems/test4.jpg"),likes:5,},
    ]
    }
}
}
</script>

<style lang="scss">
img{
    width: 100%;
    height: 100%;
}
.memField{
    padding: 20px 0px;
    margin-top:50px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.memField__item{
    border: 10px rgb(148, 148, 151) outset;
}
</style>