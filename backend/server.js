const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Use CORS to allow cross-origin requests from the frontend (Vite)
app.use(cors());
app.use(express.json());

// Sample route to test the server
app.get('/', (req, res) => {
  res.send('Hello from backend');
});

// Example POST endpoint
app.post('/api/items', (req, res) => {
  const items = req.body; // handle the items sent from frontend
  res.json({ message: 'Items received successfully', items });
});

// Start the server
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
