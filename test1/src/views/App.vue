<template>
  
  <HeaderPage/>
  



  <div class="container">
    <RechercheIti @search-terms-saved="handleSearchTerms"/>
    <AnimLine :savedSearchTerm1="savedSearchTerm1" :savedSearchTerm2="savedSearchTerm2"/>
    <div id="app">
      <MetroMap/>
    </div>
    
  </div>
  
  <router-view/>
</template>

<script>


import HeaderPage from '../components/HeaderPage.vue';
import RechercheIti from '../components/RechercheIti.vue';
import AnimLine from '../components/AnimLine.vue';
import MetroMap from '../components/MetroMap.vue';

export default {
  name: 'App',
  components: {
    HeaderPage,
    RechercheIti,
    AnimLine,
    MetroMap
  },
  data() {
    return {
      savedSearchTerm1: '',
      savedSearchTerm2: ''
    };
  },
  methods: {
    handleSearchTerms(data) {
      // Recevoir les termes de recherche émis par RechercheIti et les définir comme données du composant
      this.savedSearchTerm1 = data.searchTerm1;
      this.savedSearchTerm2 = data.searchTerm2;
    }
  }
};
</script>

<style scoped>



@media (max-width: 700px) {
  .container {
    flex-direction: column;
    margin-top:0px;
  }



}


.container {
  display: flex;
  justify-content: space-between;

}

#app, .RechercheIti {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 17px;
  flex:1;
  z-index: 0;
}



</style>
./components/HeaderPage.vue
./components/RechercheIti.vue
./components/AnimLine.vue
