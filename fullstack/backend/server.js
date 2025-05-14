// Import Express module
const express = require('express');
const cors = require('cors');

const app = express();

// Middleware FIRST
app.use(cors());
app.use(express.json());

// Define basic route to test the server
app.get('/', (req, res) => {
    res.send('NBA Leaderboard API is running');
});

// Mount players route
const playerRoutes = require('./routes/players');
app.use('/api/players', playerRoutes);

// Define port the server will run on
const PORT = process.env.PORT || 3000;

// Start the server and listen on specified port
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});