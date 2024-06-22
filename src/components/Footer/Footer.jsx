import React, { memo } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

const Footer = (props) => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <div>
              <p className="footer-end-matter">
                Plot&trade; - Evoke Group 10/6 US-RMMH-2200100 v3 – Confidential and
                Proprietary – For Internal Training Purposes Only
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default memo(Footer)
