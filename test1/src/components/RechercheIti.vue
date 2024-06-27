<template>
  <div class="search-container">
    <input type="text" v-model="searchTerm1" placeholder="Départ">
    <input type="text" v-model="searchTerm2" placeholder="Arrivée">
    <button @click="showPoints">Rechercher</button>
  </div>
</template>

<script>
export default {
  name: 'RechercheIti',
  data() {
    return {
      searchTerm1: '',
      searchTerm2: '',
    };
  },
  methods: {
    showPoints() {
      // Emit the custom event with the values of searchTerm1 and searchTerm2
      this.$emit('search-terms-saved', {
        searchTerm1: this.searchTerm1,
        searchTerm2: this.searchTerm2
      });
      // Reset the input fields
      this.searchTerm1 = '';
      this.searchTerm2 = '';
    }
  }
};
</script>

<style scoped>
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 0px;
}

input[type="text"] {
  padding: 10px;
  border: 2px solid #ccc;
  margin-top: 0px;
  border-radius: 4px;
  width: 260px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-left: 20px ;
  margin-right: 20px;
}

button {
  padding: 10px 20px;
  margin-top: 10px;
  background-color: #007bff;
  width: 110px;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}


@media (max-width: 700px) {
  input[type="text"] {
  padding: 10px;
  border: 2px solid #ccc;
  margin-top: 0px;
  border-radius: 4px;
  width: 300px;
  box-sizing: border-box;
  margin-bottom: 10px;
  margin-left: 0px;
  margin-right: 0px;
}
.search-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}
}
button:hover {
  background-color: #0056b3;
}

button:active {
  background-color: #7ec1ff;
}
</style>
