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

module.exports = {
  getAllFood,
  getFoodById,
  getAllCartItems,
  addToCart,
  removeFromCart,
  updateCartItemQuantity,
};
