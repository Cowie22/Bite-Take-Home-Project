'use client'

import React, { memo, useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../contexts/state'
import axiosClient from '../../axiosClient'
import Image from 'next/image'
import Link from 'next/link'

import CartList from '../../components/CartList/CartList'

const Cart = (props) => {
  const state = useContext(AppContext)
  const {
    updateCurrentPage,
  } = state

  useEffect(() => {
    updateCurrentPage('cart')
  }, [])
  
  return (
    <section className='cart-container'>
      <Container>
        <Row>
          <Col>
            <h1 className='text-center'>
              YOUR CART
            </h1>
            <CartList />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Cart