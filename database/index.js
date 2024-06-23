const mysql = require('mysql2/promise');
const { host, user, password, database } = require('./config.js');

const pool = mysql.createPool({ host, user, password, database });

// Gets all food from the database using async and await
async function getAllFood() {
  const queryStr = 'SELECT * FROM food';
  try {
    const [rows] = await pool.query(queryStr);
    return rows;
  } catch (error) {
    console.error('Error fetching food data:', error);
    throw error;
  }
}

async function getFoodById(id) {
  const queryStr = 'SELECT * FROM food WHERE id = ?';
  try {
    const [rows] = await pool.query(queryStr, [id]);
    return rows;
  } catch (error) {
    console.error('Error fetching food data:', error);
    throw error;
  }
}

async function getAllCartItems() {
  const queryStr = 'SELECT * FROM cart';
  try {
    const [rows] = await pool.query(queryStr);
    return rows;
  } catch (error) {
    console.error('Error fetching food data:', error);
    throw error;
  }
}

async function addToCart(food_id, quantity) {
  const queryStr = `
    INSERT INTO cart (food_id, quantity) VALUES (?, ?)
    ON DUPLICATE KEY UPDATE quantity = quantity + VALUES(quantity)
  `;
  try {
    const [result] = await pool.query(queryStr, [food_id, quantity]);
    return result.insertId;
  } catch (error) {
    console.error('Error adding item to cart:', error);
    throw error;
  }
}

async function removeFromCart(id) {
  const queryStr = 'DELETE FROM cart WHERE id = ?';
  try {
    await pool.query(queryStr, [id]);
  } catch (error) {
    console.error('Error removing item from cart:', error);
    throw error;
  }
}

async function updateCartItemQuantity(id, quantity) {
  const queryStr = 'UPDATE cart SET quantity = ? WHERE id = ?';
  try {
    await pool.query(queryStr, [quantity, id]);
  } catch (error) {
    console.error('Error updating cart item quantity:', error);
    throw error;
  }
}

async function completeOrder() {
  const getCartItemsQuery = `
    SELECT cart.id, cart.food_id, cart.quantity, food.price 
    FROM cart 
    JOIN food ON cart.food_id = food.id
  `;
  const insertOrderQuery = 'INSERT INTO orders (total) VALUES (?)';
  const insertOrderItemsQuery = 'INSERT INTO order_items (order_id, food_id, quantity) VALUES ?';
  const clearCartQuery = 'TRUNCATE TABLE cart';

  try {
    const [cartItems] = await pool.query(getCartItemsQuery);
    if (cartItems.length === 0) {
      throw new Error('Cart is empty');
    }

    const total = cartItems.reduce((sum, item) => {
      const itemTotal = item.quantity * item.price;
      return sum + itemTotal;
    }, 0);

    if (isNaN(total)) {
      throw new Error('Total calculation resulted in NaN');
    }

    const [orderResult] = await pool.query(insertOrderQuery, [total]);
    const orderId = orderResult.insertId;

    const orderItems = cartItems.map(item => [orderId, item.food_id, item.quantity]);
    await pool.query(insertOrderItemsQuery, [orderItems]);

    await pool.query(clearCartQuery);

    return orderId;
  } catch (error) {
    console.error('Error completing order:', error);
    throw error;
  }
}

async function getAllOrders() {
  const queryStr = 'SELECT * FROM orders';
  try {
    const [rows] = await pool.query(queryStr);
    return rows;
  } catch (error) {
    console.error('Error fetching food data:', error);
    throw error;
  }
}

module.exports = {
  getAllFood,
  getFoodById,
  getAllCartItems,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
  completeOrder,
  getAllOrders,
};
