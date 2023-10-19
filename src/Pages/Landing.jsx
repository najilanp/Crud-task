import React from 'react'
import { Col, Row } from 'react-bootstrap'

function Landing() {
  return (
    <>
    {/* <div className='d-flex justify-content-center align-items-center mt-5 '>
      <div className=' landingpage-intro me-5 d-flex flex-column justify-content-center align-items-center w-100'>
        <h2>Unlock your imagination,<br /><span style={{color:"#2c3e50"}}>One page</span> at a time</h2>
        <p className=''>Where stories come to life and adventures await on every page.Explore a world of diverse genres, from thrilling mysteries to heartwarming romances.</p>
        <button className='btn btn-primary'>Click here to know more</button>

      </div>
      <div className='landingpage-img'></div>
         <img src={"https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="img" className='rounded' />
    </div> */}
    <Row className='mt-5'>

      <Col md={6}></Col>
      <Col md={4} >
        <img width={"600px"}  src= {"https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="img" />
      </Col>


    </Row>

    </>
  )
}

export default Landing