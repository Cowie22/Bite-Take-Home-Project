import React, { memo, useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import axiosClient from '../../axiosClient'
import Image from 'next/image'

const CartList = (props) => {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await axiosClient.get('/api/cart')
        const fetchedCartItems = response.data

        // Fetch food details for each food_id in the cart
        const foodDetailsPromises = fetchedCartItems.map(async (cartItem) => {
          const foodResponse = await axiosClient.get(
            `/api/food/${cartItem.food_id}`
          )
          return {
            ...cartItem,
            foodDetails: foodResponse.data[0],
          }
        })

        // Resolve all promises to get complete cart items with food details
        const updatedCartItems = await Promise.all(foodDetailsPromises)
        setCartItems(updatedCartItems)

        const cartTotal = updatedCartItems.reduce((acc, item) => {
          return acc + item.quantity * item.foodDetails.price
        }, 0)
        setTotal(cartTotal)

      } catch (err) {
        setError(err.message || 'Something went wrong')
      } finally {
        setLoading(false)
      }
    }

    fetchCartItems()
  }, [])

  const handleIncrement = async (id) => {
    try {
      const updatedItems = cartItems.map((item) => {
        if (item.id === id) {
          const newQuantity = item.quantity + 1
          // Update the backend with PUT request
          axiosClient.put(`/api/cart/${id}`, { quantity: newQuantity })
          return { ...item, quantity: newQuantity }
        }
        return item
      })
      setCartItems(updatedItems)

      const cartTotal = updatedItems.reduce((acc, item) => {
        return acc + item.quantity * item.foodDetails.price;
      }, 0);
      setTotal(cartTotal)

    } catch (err) {
      console.error('Error incrementing quantity:', err)
    }
  }

  const handleDecrement = async (id) => {
    try {
      const updatedItems = cartItems.map((item) => {
        if (item.id === id && item.quantity > 1) {
          const newQuantity = item.quantity - 1
          // Update the backend with PUT request
          axiosClient.put(`/api/cart/${id}`, { quantity: newQuantity })
          return { ...item, quantity: newQuantity }
        }
        return item
      })
      setCartItems(updatedItems)

      const cartTotal = updatedItems.reduce((acc, item) => {
        return acc + item.quantity * item.foodDetails.price;
      }, 0);
      setTotal(cartTotal)

    } catch (err) {
      console.error('Error decrementing quantity:', err)
    }
  }

  const handleDelete = async (id) => {
    try {
      // Delete item from backend with DELETE request
      await axiosClient.delete(`/api/cart/${id}`)
      const updatedItems = cartItems.filter((item) => item.id !== id)
      setCartItems(updatedItems)

      const cartTotal = updatedItems.reduce((acc, item) => {
        return acc + item.quantity * item.foodDetails.price;
      }, 0);
      setTotal(cartTotal)
      
    } catch (err) {
      console.error('Error deleting item:', err)
    }
  }

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div className='cart-list-container'>
      <h2 className='green'>Total: ${total.toFixed(2)}</h2> 
      <Row>
        {cartItems.map((cartItem) => {
          const { id, quantity } = cartItem
          const { name, imageURL, price } = cartItem.foodDetails
          return (
            <Col
              key={id}
              className='cart-list-col'
              lg={{ span: 3 }}
            >
              <div className='cart-list-card-container'>
                <div className='cart-list-content-container'>
                  <h3 className='h2 teal'>{name}</h3>
                  <div className='cart-list-content-inner-container'>
                    <div className='cart-list-quantity-btn-container'>
                      <button
                        onClick={() => handleIncrement(id)}
                        className='cta-btn orange-btn'
                      >
                        +
                      </button>
                      <button
                        onClick={() => handleDecrement(id)}
                        className='cta-btn orange-btn'
                      >
                        -
                      </button>
                    </div>
                    <p>Quantity: {quantity}</p>
                    <p className='green'>Price: ${price}</p>
                  </div>
                </div>
                <div className='cart-list-img-container'>
                  <Image
                    src={`${imageURL}`}
                    width={200}
                    height={200}
                    alt='Picture of the author'
                  />
                </div>
                <button
                  onClick={() => handleDelete(id)}
                  className='cta-btn orange-btn'
                >
                  Delete
                </button>
              </div>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

export default memo(CartList)
