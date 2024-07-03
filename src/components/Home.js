import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

function Home() {
  return (
    <div>
       <Container fluid className="d-flex justify-content-center align-items-center vh-100">
      <Row>
        <Col>
          <div className="text-center text-light">
            <h1>Hi! This is Sanjai</h1>
            <h2>Welcome to My Portfolio.</h2>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  )
}

export default Home