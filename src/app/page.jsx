'use client'

import React, { memo, useContext, useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { AppContext } from '../contexts/state'

import FoodList from '../components/FoodList/FoodList'

const Home = (props) => {
  const state = useContext(AppContext)
  const {
    updateCurrentPage,
  } = state

  useEffect(() => {
    updateCurrentPage('home')
  }, [])
  
  return (
    <section className='home-container'>
      <section className='home-inner-container'>
        <Container>
          <Row>
            <Col lg={{span: 12}}>
              <h1 className='text-center'>
                SELECT ITEMS BELOW
              </h1>
              <FoodList />
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
}

export default memo(Home)