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

module.exports = {
  getAllFood,
  getFoodById,
};
