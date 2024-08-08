const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
const itemRoutes = require('./routes/items');
const playerRoutes = require('./routes/players');
const matchRoutes = require('./routes/matches');
var cors = require('cors')
const fetchAndStoreMatchData = require('./scheduler');

const app = express();
app.use(cors())
const port = 3000;

// Conectar ao MongoDB
connectDB();

const allowCrossDomain = (req, res, next) => {
  res.header(`Access-Control-Allow-Origin`, `*`);
  res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
  res.header(`Access-Control-Allow-Headers`, `*`);
  next();
};

// Middleware
app.use(bodyParser.json());
app.use(allowCrossDomain);

// Usar as rotas
app.use('/items', itemRoutes);
app.use('/players', playerRoutes);
app.use('/matches', matchRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
