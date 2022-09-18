<template>
  <div class="home">
  <h1>{{persons}}</h1>
  <buttonn variant = "success" @click="getPersons">Button</buttonn>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "HomeView",
  components: {
    // HelloWorld,
  },
  data(){
    return{
      persons:{}
    }
  },
  methods:{
    getPersons(){
      this.axios.get("https://rickandmortyapi.com/api/character").then(resp =>{
        this.persons = resp
    });
  },
},
};
</script>
