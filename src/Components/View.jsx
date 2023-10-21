import React from 'react'
import Bookcard from './Bookcard'
import { Row,Col } from 'react-bootstrap'

function View() {
  return (
    <>
    <Row>
        <Col sm={12} md={6} lg={4}>
          <Bookcard/>
        </Col>
    </Row>
    </>
  )
}

export default View