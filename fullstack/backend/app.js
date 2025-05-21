const express = require('express');
const cors = require('cors');

const playerRoutes = require('./routes/players');
const authRoutes = require('./routes/auth')

const app = express();

app.use(cors());
app.use(express.json());

// Mount your routes
app.use('/api/players', playerRoutes)
app.use('/api', authRoutes)

module.exports = app;
