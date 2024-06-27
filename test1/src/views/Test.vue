<template>
  <div class="position">

  
    <HeaderPage/>
    <MiddlePage/>
    <ThuneHeader testle="je veux mettre ça en grand"/>
    <ClassPart :update-person-count="updatePersonCount"/>
    <VenteArgent/>

    
    
</div>
<router-view/>
</template>

<script>

import HeaderPage from '../components/HeaderPage.vue';
import MiddlePage from '../components/MiddlePage.vue';
import ThuneHeader from '../components/ThuneHeader.vue';
import ClassPart from '../components/ClassPart.vue';
import VenteArgent from '../components/VenteArgent.vue';





export default {
  name: 'TestPage',
  components: {
    HeaderPage,
    MiddlePage,
    ThuneHeader,
    ClassPart,
    VenteArgent
  },
  data() {
    return {
      personCount: 0
    };
  },
  methods: {
    updatePersonCount(count) {
      this.personCount = count;
    },
    incrementPersonCount() {
      this.personCount++;
    }
  }
  
  
}


</script>

./components/HeaderPage.vue
./components/MiddlePage.vue
./components/ThuneHeader.vue
./components/ClassPart.vue
./components/VenteArgent.vue



<style>
.position {
  display: flex;
  flex-direction: column; /* Aligner les éléments verticalement */
 
}
</style>