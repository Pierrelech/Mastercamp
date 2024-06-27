<template>
  <div class="container">
    <div v-if="savedSearchTerm1 || savedSearchTerm2" class="terms-container">
     
      <p class="term">{{ savedSearchTerm1 }}</p>
    </div>

    <div class="LineElements">
      <div class = "stations">
        <p>test</p>
        <p>test2</p>
        <p>test3</p>
      </div>
      <svg v-if="savedSearchTerm1 || savedSearchTerm2" class="line-container" width="50" height="100%">
      <line class="animated-line" x1="25" y1="2%" x2="25" y2="98%" stroke="blue" stroke-width="20" stroke-linecap="round"/>
      <circle cx="25" cy="2%" r="7" fill="white" />
      <circle cx="25" cy="98%" r="7" fill="white" />
      
    </svg>
    </div>
   
    <div v-if="savedSearchTerm1 || savedSearchTerm2" class="terms-container">
      <p class="term">{{ savedSearchTerm2 }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AnimLine',
  props: {
    savedSearchTerm1: String,
    savedSearchTerm2: String
  },

  computed: {
    uniqueId() {
      return this.savedSearchTerm1 + '-' + this.savedSearchTerm2;
    }
  },
  watch: {
    uniqueId() {
      console.log('uniqueId changed:', this.uniqueId);
      this.animateLine();
    }
  },

  methods: {
    animateLine() {
      const line = document.querySelector('.animated-line');
      
      if (line) {
        const length = line.getTotalLength();
        
        line.style.strokeDasharray = length;
        line.style.strokeDashoffset = length;
        
        // Force le navigateur à reconnaître la réinitialisation
        line.getBoundingClientRect(); // Peut-être déjà suffisant pour certains navigateurs
        line.style.transition = ''; // Invalide le style de transition
        line.offsetWidth; // Force le recalcul du style
        
        // Réapplique l'animation
        setTimeout(() => {
          line.style.transition = 'stroke-dashoffset 1s ease-in-out';
          line.style.strokeDashoffset = '0';
        }, 0); // Utilise setTimeout pour s'assurer que les modifications de style sont appliquées séquentiellement
      }
    }
  }
};
</script>

<style scoped>



.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.LineElements{
  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100%;
}

.stations{
  display:flex;
  flex-direction: column;
  align-items: center;
}

.terms-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
}

.term{
  color: black;

}
p{
  color:black;
}

.left-term {
  margin-left: 20px;
  color: black;
}

.right-term {
  margin-right: 20px;
  color: black;
}

.line-container {
  width: 50px;
}
</style>
