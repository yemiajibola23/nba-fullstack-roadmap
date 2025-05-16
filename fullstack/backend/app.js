const express = require('express');
const cors = require('cors');

const playerRoutes = require('./routes/players');

const app = express();

app.use(cors());
app.use(express.json());

// Mount your routes
app.use('/api/players', playerRoutes);

module.exports = app;
