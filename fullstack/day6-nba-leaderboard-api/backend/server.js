// Import Express module
const express = require('express');

// Initialize Express app
const app = express();

// Define port the server will run on
const PORT = process.env.PORT || 3000;

// Define basic route to test the server
app.get('/', (req, res) => {
    res.send('NBA Leaderboard API is running');
});

// Start the server and listen on specified port
app.listen(PORT, () => {
    console.log(`Server is listening to port ${PORT}`);
});

// Middleware to parse incoming JSON (not used yet, but good practice)
app.use(express.json());

// Mount players route
const playerRoutes = require('./routes/players');
app.use('/api/players', playerRoutes);