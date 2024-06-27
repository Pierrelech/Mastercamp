

// This is the class that will be used to create a new user
// The user will be created with a firstname, lastname, email and password
// The user is normaly created with a formular and exported to database

import axios from 'axios';

class User {
    /**
    * @param {string} firstname
    * @param {string} lastname
    * @param {string} email
    * @param {string} mdp
    */
    constructor(firstname, lastname, email, mdp) {
        this.firstname = firstname;
        this.lastname= lastname;
        this.email = email;
        this.mdp = mdp;
    }
}



export default {
    
  
  methods: {
    async submit() {
      const user = new User(this.firstname, this.lastname, this.email, this.mdp);
      console.log(user);
      // Here you can do something with the user, like sending it to a server
      this.users.push(user);
      
      try {
        const response = await axios.post('http://localhost:3000/register', user);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
      this.$emit('userRegistered')

    },
    },
    data() {
    return {
    users:[],
      firstname: '',
      lastname: '',
      email: '',
      mdp: '',
    };
  },


name: 'InscriptionNew',
props: {
  
},
};

