'use client'

import React, { useEffect, useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../../../contexts/state'

import FoodDetail from '../../../components/FoodItem/FoodItem'

const FoodItemPage = ({ params }) => {
  const { id } = params
  const state = useContext(AppContext)
  const {
    updateCurrentPage,
  } = state

  useEffect(() => {
    updateCurrentPage('food-item')
  }, [])
  
  return (
    <section className='food-item-container'>
      <Container>
        <Row>
          <Col>
            <FoodDetail id={id} />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default FoodItemPage
