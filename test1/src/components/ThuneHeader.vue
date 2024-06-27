<template>
  
  <div class="container-back background-blur pointer">
      <div class="case-middle-behind background1">
        <img src="../assets/localisation.png" alt="Meeting" class="taille flou">
        <p class="flou">Localisez-vous
      </p>
      </div>
      <div class="case-middle-behind background2">
        <img src="../assets/chrono.png" alt="Ecran" class="taille flou">
      </div>
      <div class="case-middle-behind background1">
        <img src="../assets/design2bon.png" alt="Logo" class="taille flou">
      </div>
      <div class="case-middle-behind background2">
        <img src = "../assets/ecolo.png" alt= "ecolo" class="taille flou">
        <p class="flou">Soyez écolo
        </p>
      </div>
  </div>

  <div class="container pointer">
    <div class="case-left shadow-left background1"> <!-- Ajout de la classe shadow-left -->
      <img src = "../assets/localisation.png" alt= "Meeting" class="taille">
      <p class="case-texte">Localisez-vous
      </p>
    </div>
    <div class="case-middle shadow-middle background2">
      <img src = "../assets/chrono.png" alt= "Ecran" class="taille">
      <p class="case-texte">Gagnez du temps
      </p>
    </div>
    <div class="case-middle shadow-middle background1">
      <img src = "../assets/design2bon.png" alt= "Logo" class="taille">
      <p class="case-texte">Respect de confidentialité
      </p>
    </div>
    <div class="case-right shadow-right background2"> <!-- Ajout de la classe shadow-right -->
      <img src = "../assets/ecolo.png" alt= "LogoA2" class="taille">
      <p class="case-texte">Soyez écolo
      </p>
    </div>
  </div>

</template>

<script>
export default {
name: 'ThuneHeader',
props: {
  testle: String
}
}
</script>

<style scoped>
.container {
  
display: flex;
position: absolute;

justify-content: space-between;
padding-top: 450px;
left:50%;
transform: translate(-50%, 0);
}

.container-back {
display: flex;
justify-content: space-between;
padding-top: 475px;
margin-left: 0;
margin-right: 0;  
}



.case-left {
flex: 1;
padding-top: 20px;
height: 225px;
border-radius: 15px 0px 0px 15px;
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
position: relative;

overflow:auto;
}

.case-middle {
flex: 1;
padding-top: 20px;
display: flex;
align-items: center;
text-align: center;
height: 225px;
width: 480px;
flex-direction: column;
position: relative;
overflow:auto;
}

.case-right {
flex: 1;
padding-top: 20px;
height: 225px;
border-radius: 0px 15px 15px 0px;
display: flex;
position: relative;
overflow:auto;
align-items: center;
flex-direction: column;

}

.case-middle-behind {
flex: 1;
padding-top: 20px;
display: flex;
align-items: center;
text-align: center;
height: 180px;
width: 400px;
flex-direction: column;

position: relative;
overflow:auto;
}

.case-left, .case-middle, .case-right {
  flex-basis: calc(50% - 10px); /* Ajustez la marge si nécessaire */
  margin-bottom: 20px; /* Espace entre les éléments */
}

@media (max-width: 1100px) {
  .case-left, .case-middle, .case-right {
    flex-basis: 50%; /* Chaque élément prend toute la largeur */
    margin-bottom: 0px;
  }
  .container{
    flex-wrap: wrap;
    width:100%;
  }
}
@media (max-width: 700px) {
  .case-left, .case-middle, .case-right {
    flex-basis: 100%; /* Chaque élément prend toute la largeur */
    margin-bottom: 0px;
  }
  .container{
    flex-wrap: wrap;
    width:100%;
    height:900px;
    background-color: #15171a;
    padding-bottom: 80px;
  }
}

.background1 {
background-color: #15171a;
}

.background2 {
background-color: #1d2024;
}

.shadow-left {
box-shadow: -5px 0px 10px rgba(0, 0, 0, 0.5), /* Ombre à droite */
           0px 5px 10px rgba(0, 0, 0, 0.5), /* Ombre en bas */
           0px -5px 10px rgba(0, 0, 0, 0.5); /* Ombre en haut */
}

.shadow-middle {
box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5), /* Ombre en bas */
           0px -5px 10px rgba(0, 0, 0, 0.5); /* Ombre en haut */
}

.shadow-right {
box-shadow: 5px 0px 10px rgba(0, 0, 0, 0.5), /* Ombre à droite */
           0px 5px 10px rgba(0, 0, 0, 0.5), /* Ombre en bas */
           0px -5px 10px rgba(0, 0, 0, 0.5); /* Ombre en haut */
}

.background-blur {
position: absolute;
top: 0px;
left: 0;
width: 100%;
height: 100px;
}

.flou {
filter: blur(5px); /* Ajoute le flou */
}

.taille {
width: 70px;
position: relative;
z-index: 0;
}
.taille2 {
width: 55px;
position: relative;
z-index: 0;
}

.case-texte{
  padding-left: 5px;
  padding-right: 5px;
  

}

.pointer {
pointer-events: none;
}

</style>
