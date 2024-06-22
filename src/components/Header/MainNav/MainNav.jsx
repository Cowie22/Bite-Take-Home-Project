import React, { memo } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import Logo from '../../Svgs/GroceryStoreLogo'

const MainNav = (props) => {
  return (
    <section className='main-nav'>
      <Container>
        <Row>
          <Col xs={{ span: 1, offset: 0 }}>
            <div className='header-logo-container'>
              <Link href='/'>
                <Logo />
              </Link>
            </div>
          </Col>
          <Col lg={{ span: 5, offset: 6 }}>
            <div className='header-text-container'>
              <p className='gold'>
                Bite take home project: Grocery List
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default memo(MainNav)
