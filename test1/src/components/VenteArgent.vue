<template>
  
    <!-- Project content container -->
    
    <!-- Slider main container -->
    <!-- Slider main container -->
    
    <div class="background-container backgroundnwar">
    <div class="background" :style="{ backgroundImage: `url(${backgroundImage})` }"></div>
    <div class="swiper-container">
    <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide" v-for="(image, index) in images" :key="index">
        <img :src="image" class="taille-image">
      </div>
        
      </div>
    <!-- If we need pagination -->
      <div class="swiper-pagination"></div>

      <!-- If we need navigation buttons -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>

      <!-- If we need scrollbar -->
      <div class="swiper-scrollbar"></div>
    </div>
    </div>
  
  
</template>
  
  <script>
  
  import Swiper from 'swiper/bundle';
  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';
  export default {
  name: 'VenteArgent',
  

  data() {
    return {
      images: [
        require('../assets/ecoloblanc.png'),
        require('../assets/design2bon.png'),
        require('../assets/localisationblanc.png')
        
        // ...
      ],
      currentImage: require('../assets/ecoloblanc.png'), // initial image
      backgroundImage:  require('../assets/ecolo.png'),
    };
  },

  watch: {
    // Surveillance des changements de currentImage
    currentImage(newValue) {
      if (newValue === require('../assets/ecoloblanc.png')) {
        this.backgroundImage = require('../assets/ecolo.png');
      } 
      else if(newValue === require('../assets/localisationblanc.png')){
        this.backgroundImage = require('../assets/localisation.png');
      }
      else{
        this.backgroundImage = this.currentImage;
      }
      
      
    },
  },

  mounted() {
    const swiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      autoplay:{
        delay:2500,
        disableOnInteraction:false,
      },
      
    });
    swiper.on('slideChange', () => {
      this.currentImage = this.images[swiper.realIndex];
      
      
      
    });
  },
};
  </script>

<style scoped>

.background-container {
  position: relative;
  height:500px;
  overflow-x: hidden;
}
.backgroundnwar{
  background-color: #1f1f1f;
  
  position: relative;
  
  
}
@media (max-width: 700px) {  
  .backgroundnwar{
    margin-top: 310px;
  }

}



.defilement-image {
    width: 100%;
    overflow: hidden;
    justify-content: space-between;
    
}
.defilant {
    height: 500px;
    
}
.slider-container {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
    margin-top: 4000px;
    
}

.swiper-container{
  
  position : relative;
  
  background-size: cover;
  
  background-position: center;

}

.swiper{
  width : 600px;
  height : 300px;
  
}

.background{
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: #1f1f1f;
  filter: blur(5px);
  z-index: 1;
  background-position: center; /* Center the background image */
  background-size: cover; /* Scale the background image to be as large as possible */
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5), /* shadow on top */
              10px 0 10px 0 rgba(0, 0, 0, 0.5), /* shadow on right */
              0 10px 10px 0 rgba(0, 0, 0, 0.5), /* shadow on bottom */
              -10px 0 10px 0 rgba(0, 0, 0, 0.5); /* shadow on left */
}

.background2{
  filter:blur(5px)
}

.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  filter:blur(0px);

}
.taille-image{
 
  height : 200px;
  padding-top: 50px;
  

}
.swiper-wrapper{
  
  height:400px;
}


</style>