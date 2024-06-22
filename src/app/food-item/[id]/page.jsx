'use client'

import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import FoodDetail from '../../../components/FoodItem/FoodItem'

const FoodItemPage = ({ params }) => {
  const { id } = params
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
