<template>
    <div class="background-gris">
      <div class="milieu-page">
      <img src="../assets/pcbleu.png" alt="Ecran Bleu" class="image-pcbleu"/>
      
      </div>
      <div class="right-side">
            <p>Déjà {{ nb_personne }} utilisateurs</p>  
      </div>
    </div>
    
  </template>
  
  <script>
    import $ from 'jquery';
    import axios from 'axios';

export default {
  name: 'ClassPart',
  data() {
    return {
      nb_personne: 0
    };
  },
  created() {
    axios.get('http://localhost:3000/utilisateurs/compte')
      .then(response => {
        this.nb_personne = response.data.count;
        console.log(this.nb_personne);
        this.$emit('update-person-count', this.nb_personne);
      })
      .catch(error => {
        console.error(error);
      });
  },


    mounted() {
      $(window).scroll(() => {
        const scrollPosition = $(window).scrollTop();
        const element = $(".milieu-page");
        const elementdroite=$(".right-side");

        if (window.innerWidth<1100){
          
          if (scrollPosition > 500 ) {
            element.css("left", "0%"); // Change the value based on where you want to position it horizontally
            elementdroite.css("right","0")
        } else {
          element.css("left", "-750px");
          elementdroite.css("right","-770px")
        }

        

       
        }
        else 
        {
          if (scrollPosition > 100) {
            element.css("left", "0%"); // Change the value based on where you want to position it horizontally
            elementdroite.css("right","0")
          } else { 
            element.css("left", "-750px");
            elementdroite.css("right","-770px")
        }
        
        
      }
      });
    }
   

    
  }
  </script>
  
  <style scoped>
  .gros {
    font-size: 400px;
  }
  
  .milieu-page img {
    position: relative;
    height: auto;
    padding-top: 0px;
    width: 719px;
  }
  
  .background-gris{
    background-color: #15171a;
    position: relative;
    margin-top: 500px;
    height: 500px;
    z-index: -1;
    overflow: hidden;

  }

  .milieu-page {
    position: relative;
    left: -750px; /* initial position */
    width: 100px;
    z-index: 0;
    background-repeat: no-repeat;
    background-position: center;
    padding-top: 0px;
    transition: left 0.5s ease; /* transition effect */
    float:left;
  }
  @media (max-width: 1400px) {
  .image-pcbleu {
    display: none;
  }

}

@media (max-width: 1100px) {  
  .right-side{
    top:0px;
    right: -770px;
    float: right;
    height: 100px;
    width : 769px;
    padding-right:0px;
    padding-top: 0px;
    margin-top: 150px;
    z-index: 0;
    transition: right 0.5s ease; /* transition effect */
  }

  @media (max-width: 700px) {  
  .right-side{
    position: absolute; /* ou 'relative', selon le contexte */
    top: 0px;
    left: 50%;
    transform: translateX(-50%);
    float: none;
    height: 100px;
    width: 769px;
    padding-right: 0px;
    padding-top: 0px;
    margin-top: 650px;
    z-index: 0;
    transition: right 0.5s ease; /* transition effect */
  }
}


}


  .right-side{
    position: absolute;
    top : 0px;
    right: -770px;
    float: right;
    height: 100px;
    width : 769px;
    padding-right:0px;
    padding-top: 50px;
    z-index: 0;
    transition: right 0.5s ease; /* transition effect */
    
  }
  p{
    padding-left:50px;
    color:rgb(0, 166, 255);
    font-size: 70px;
    padding-top: 100px
  }


  
  </style>