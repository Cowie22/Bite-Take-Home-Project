const path = require('path');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const next = require('next');
const { getAllFood, getFoodById } = require('../database/index');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev, dir: './src' });
const handle = nextApp.getRequestHandler();

nextApp.prepare().then(() => {
  const app = express();

  app.use(cors());
  app.use(bodyParser.json());

  app.get('/food', async (req, res) => {
    try {
      const foodItems = await getAllFood();
      res.status(200).json(foodItems);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch food items' });
    }
  });

  app.get('/food/:id', async (req, res) => {
    try {
      const foodItem = await getFoodById(req.params.id);
      res.status(200).json(foodItem);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch food item' });
    }
  });

  // Handle all Next.js routing
  app.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 3001;

  app.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Web server running on: http://localhost:${PORT}`);
  });
});