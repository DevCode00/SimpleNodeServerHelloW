// server.js
import express from 'express'; // Import express
import cors from 'cors';       // Import cors for cross-origin requests

const app = express();        // Create an Express application
const PORT = process.env.PORT || 3000; // Define the port

app.use(cors());             // Enable CORS
app.use(express.json());     // Parse JSON bodies

// Define a simple route
app.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' }); // Send a JSON response
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
