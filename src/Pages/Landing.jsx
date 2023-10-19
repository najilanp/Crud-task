import React from 'react'
import { Col, Row,Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'


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
    <Row className='mt-5  align-items-center justify-content-center'>

      <Col md={4}>
      <h2>Unlock your imagination,<br /><span style={{color:"#2c3e50"}}>One page</span> at a time</h2>
      <p style={{}}>Where stories come to life and adventures await on every page. Explore a world of diverse genres, from thrilling mysteries to heartwarming romances.</p>
      <Link to={"/home"}><button className='btn btn-primary'>Click here to know more</button></Link>  


      </Col>
      <Col md={6} >
        <img width={"600px"}  src= {"https://images.unsplash.com/photo-1460518451285-97b6aa326961?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt="img" className='rounded' />
      </Col>
    </Row>

    <div className=' mt-5'>
    <Carousel >
      <Carousel.Item>
         <img   width={'100%'} height={"450px"} src="https://images.unsplash.com/photo-1566131807516-e3b3cd1a89d1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img1" /> 
         {/* <Carousel.Caption>
          <h3>first slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>        */}
      </Carousel.Item>
      <Carousel.Item>

      <img  width={'100%'} height={"450px"} src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img3" /> 
         {/* <Carousel.Caption>
          <h3>first slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>
        
      <Carousel.Item>
        <img width={'100%'} height={"450px"} src="https://plus.unsplash.com/premium_photo-1661964153042-56211a8e2d0b?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="img2" />
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>

    </div>

    </>
  )
}

export default Landing