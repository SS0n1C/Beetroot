const state = {
    characters: [{ id: 1 }, { id: 2 }],
    pages: 0,
  };
  const getters = {
    getCharacters(state) {
      return state.characters;
    },
    // getCharacterByID
    // getFilteredCharacters
  };
  const mutations = {
    SET_CHARACTERS(payload){
        state.characters = payload
    }
  };
  const actions = {
    getCharacters(){
        api.getCharacters().then(resp =>{
          commit.SET_CHARACTERS(resp.data.results)
        })
    }
  };
  
  export default {
    state,
    getters,
    mutations,
    actions,
  };