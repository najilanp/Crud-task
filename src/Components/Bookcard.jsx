import React from 'react'
import { useState } from 'react';
import { Card,Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';



function Bookcard({displayData}) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    {
      displayData&&
    <Card className='mb-3' >
      <Card.Img onClick={handleShow}  style={{width:"100%",height:"180px"}} variant="top" src={displayData?.url}/>
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
            <h5>{displayData?.caption}</h5>
            <div className='btn'><i className='fa-solid fa-trash fa-xl  text-danger'></i></div>
        </Card.Title>
      </Card.Body>
    </Card>
    }

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{displayData?.caption}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Link target='_blank' to={displayData?.link}>
              <img width={"100%"} height={"300px"} src={displayData?.url} />
            </Link>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Bookcard