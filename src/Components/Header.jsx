import React from 'react'
import { Navbar,Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <>
    <Navbar className="bg-primary">
        <Container>
          <Navbar.Brand className='fw-bolder fs-4'>
          <Link to={"/"} style={{textDecoration:'none',color:"#fff"}}>
            <i className="fa-solid fa-book-open-reader fa-fade fa-2x me-2 "></i>
              {' '}
              BookStore <span className='fs-10'>.</span>
          </Link>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  )
}

export default Header