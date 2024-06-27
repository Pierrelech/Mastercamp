<template>
  <body>

  
    <div class="middle-page">
      <h1 class="decal">Trouvez votre trajet <blue>rapidement</blue>  </h1>
      
      <p class="decal" id="colle-top">
        à travers le réseau parisien
      </p>
      
      
      
    </div>
  </body>
</template>

<script>
export default {
  name: 'MiddlePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

blue{
  background-color: #2892b5;
  box-shadow: 0px 5px #2892b5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3); /* Décalage horizontal, décalage vertical, flou, couleur */
}

.decal{
  padding-left: 60px;
}





.middle-page{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  color : white;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0.25),  rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 1)), url('../assets/mapparis.gif');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  height : 475px;
  
}

h1{
  margin-top: 250px;
  margin-bottom: 0px;
 
}

#colle-top{
  margin-top: 0px;
  padding-left: 150px;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0;
}
a {
  color: #42b983;

}
h1{
  background-color: transparent;
}

body{
  background-color: aqua;
  height:100%;
}
.logo-fond{
  
  height: 200px;
  width:100%;
}
</style>
