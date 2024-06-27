
const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const bodyParser = require('body-parser'); // Ajout de body-parser

const app = express();
app.use(cors({origin:'http://localhost:8080'}));
app.use(bodyParser.json()); // Utilisation de body-parser pour analyser les données JSON du corps de la requête




app.post('/register', async function (req, res) {
  try {
    const { firstname, lastname, email, mdp } = req.body;

    // Vérifiez si l'utilisateur existe déjà
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).send('Un utilisateur avec cet email existe déjà.');
    }

    // Créez le nouvel utilisateur
    const newUser = await User.create({ firstname, lastname, email, mdp });

    res.status(201).send(newUser);
  } catch (error) {
    return res.status(500).send(error.message);
    console.error(error);
    res.status(500).send('Une erreur est survenue lors de la création de l\'utilisateur.');
  }
});
  


// Démarrer le serveur sur le port 3000


