'use client'

import React, { memo, useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'
import axiosClient from '../../axiosClient'
import { useRouter } from 'next/navigation'

import CartList from '../../components/CartList/CartList'

const Cart = (props) => {
  const state = useContext(AppContext)
  const { updateCurrentPage } = state
  const router = useRouter()

  useEffect(() => {
    updateCurrentPage('cart')
  }, [])

  const handleCompleteOrder = async () => {
    try {
      const response = await axiosClient.post('/api/orders')
      const { orderId } = response.data
      alert(`Order completed successfully! Order ID: ${orderId}`)
      router.push('/')
      // Optionally, you can clear the cart items state or redirect the user after order completion
    } catch (err) {
      alert('Failed to complete order. Please try again.')
    }
  }

  return (
    <section className='cart-container'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center'>YOUR CART</h1>
            <div className='complete-order-btn-container'>
              <button
                className='cta-btn orange-btn'
                onClick={handleCompleteOrder}
              >
                Complete Order
              </button>
            </div>
            <CartList />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cart
