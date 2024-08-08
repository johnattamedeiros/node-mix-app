const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const itemRoutes = require('./routes/items');
const playerRoutes = require('./routes/players');
const matchRoutes = require('./routes/matches');
//const fetchAndStoreMatchData = require('./scheduler');

const app = express();
const port = 3000;

// Conectar ao MongoDB
connectDB();

// Middleware
app.use(bodyParser.json());

// Usar as rotas
app.use('/items', itemRoutes);
app.use('/players', playerRoutes);
app.use('/matches', matchRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
