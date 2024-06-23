import React, { memo } from 'react'
import Link from 'next/link'
import { Container, Row, Col } from 'react-bootstrap'

import Logo from '../../Svgs/GroceryStoreLogo'
import CartLogo from '../../Svgs/GroceryCartLogo'

const MainNav = (props) => {
  return (
    <section className='main-nav'>
      <Container>
        <Row>
          <Col lg={{ span: 1, offset: 0 }} xs={{span: 3, offset: 0}}>
            <div className='header-logo-container'>
              <Link href='/'>
                <Logo />
              </Link>
            </div>
          </Col>
          <Col lg={{ span: 1, offset: 8 }} xs={{span: 3, offset: 1}}>
            <div className='header-logo-container'>
              <Link href='/cart'>
                <CartLogo />
                <p className='black bold text-center'>
                  CART
                </p>
              </Link>
            </div>
          </Col>
          <Col lg={{ span: 2, offset: 0 }} xs={{span: 4, offset: 1}}>
            <div className='header-text-container'>
              <p className='gold'>
                Bite take home project
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default memo(MainNav)
