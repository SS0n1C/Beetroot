<template>
    <div class="ram-footer bg-success mt-1 text-center" fluid>
      <h1>footer</h1>
      {{ characters }}
    </div>
  </template>
  
  <script>
  export default {
    computed: {
      characters() {
        return this.$store.getters.getCharacters;
        // return this.$store.state.characters
      },
    },
  };
  </script>
  
  <style lang="scss"></style>