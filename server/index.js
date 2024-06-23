const path = require('path')
const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const next = require('next')
const {
  getAllFood,
  getFoodById,
  getAllCartItems,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
} = require('../database/index')

const dev = process.env.NODE_ENV !== 'production'
const nextApp = next({ dev, dir: './src' })
const handle = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  const app = express()

  app.use(cors())
  app.use(bodyParser.json())

  app.get('/api/food', async (req, res) => {
    try {
      const foodItems = await getAllFood()
      res.status(200).json(foodItems)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch food items' })
    }
  })

  app.get('/api/food/:id', async (req, res) => {
    try {
      const foodItem = await getFoodById(req.params.id)
      res.status(200).json(foodItem)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch food item' })
    }
  })

  app.get('/api/cart', async (req, res) => {
    try {
      const cartItem = await getAllCartItems()
      res.status(200).json(cartItem)
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch food items' })
    }
  })

  app.post('/api/cart', async (req, res) => {
    const { food_id, quantity } = req.body
    try {
      const cartItemId = await addToCart(food_id, quantity)
      res.status(200).json({ id: cartItemId })
    } catch (error) {
      res.status(500).json({ error: 'Failed to add item to cart' })
    }
  })

  app.delete('/api/cart/:id', async (req, res) => {
    const { id } = req.params
    try {
      await removeFromCart(id)
      res.sendStatus(204)
    } catch (error) {
      res.status(500).json({ error: 'Failed to remove item from cart' })
    }
  })

  app.put('/api/cart/:id', async (req, res) => {
    const { id } = req.params
    const { quantity } = req.body
    try {
      await updateCartItemQuantity(id, quantity)
      res.sendStatus(204)
    } catch (error) {
      res.status(500).json({ error: 'Failed to update cart item quantity' })
    }
  })

  // Handle all Next.js routing
  app.all('*', (req, res) => {
    return handle(req, res)
  })

  const PORT = process.env.PORT || 3001

  app.listen(PORT, (err) => {
    if (err) throw err
    console.log(`Web server running on: http://localhost:${PORT}`)
  })
})
