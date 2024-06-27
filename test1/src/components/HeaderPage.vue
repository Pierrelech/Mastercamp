<template>
    <body>
      <div class = "header-container">

          <img src = "../assets/design2bon.png" alt= "Logo" class="logo-top">
          <header>
              
              <div id="menu">
                  
                      <ul>
                          
                          <li>
                              <router-link to="/">Accueil</router-link>
                              <router-link to="/app">Map</router-link>                            
                          </li>
                              
                      </ul>
                  
              </div>
          
            
            
          </header>
        </div>
    </body>
</template>

<script>
export default{
    name: 'HeaderPage',
    props:{
        
    },
    methods: {
    goToAppPage() {
      this.$router.push('/app');
    }
  }
    
}

</script>

<style>
body{

    

font-family: 'Arial', sans-serif;
margin-top:10;
margin-left: 0;
margin-right: 0;
padding: 0;
color: #f2f2f2;
opacity:1;
height: 88px;

}


.header-container {
    position: relative;
    z-index: 2;

}


.logo-top{
    display: block;
    position: relative;
    width:88px;
    padding : 0px;
    padding-left: 70px;
    margin-top: 0px;
    z-index:2;
    overflow: hidden; /* Clear floats */
    animation-duration: 1s;
    animation-name:apparition2;
    animation-fill-mode: forwards;
    
    

}


header {
    
    text-align: center;
    
    padding: 0px;
    margin-top: 50px;
    position: relative;
  }


#menu {

    position : relative;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
    padding-bottom: 0px;
    
    
    width: 100%;
     /* Couleur de fond */
    list-style: none; /* Supprimer les puces de liste */
    overflow: hidden; /* Clear floats */
    animation-duration: 1s;
    animation-name:apparition;
    animation-fill-mode: forwards;
    
}

@keyframes apparition{
  from {
    margin-top:-450px;
    height: 200px;
    width: 100%;
  }
  to{
    margin-top:-200px;
    width: 100%;
    height:175px;
  }
}
@keyframes apparition2{
  from {
    margin-top:-450px;

  }
  to{
    margin-top:0px;

  }
}

#menu ul {
  float: right; /* Aligner la liste à droite */
  padding-top: 70px;
  margin: 0;
  padding-left: 0;

  display: flex;
  justify-content: flex-end;
}
#menu li {
    float: left;
    margin-left: 0px;
    padding-right: 20px;
}

#menu a {
    display: inline-block;
    width: 50px;
    color : #f1f1f1;
    height : 20px;
    background-color: transparent;
    text-align: center;
    padding-top: 25px;
    padding-bottom : 25px;
    padding-left: 14px ; /* Espacement interne */
    margin-top:10px;
    margin-bottom:  10px;
    
    text-decoration: none; /* Supprimer la soulignement du lien */
    transition: color 0.5s;
    transform-origin: 0;
    
}
#coaching{
  padding-right: 20px;
}

#menu a:hover {
    color: rgb(100, 185, 230); /* Couleur du texte */
    
    text-decoration: underline;
    text-underline-offset: 50px ;
    
    
}



#helloasso, #discord, #twitter {
  width: 50px;
  color: #f1f1f1;
  
  background-color: transparent;
  text-align: center;
  padding-right:0px;
  text-decoration: none;
  display: inline-block;
  
}



</style>