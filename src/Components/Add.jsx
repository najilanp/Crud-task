import React from 'react'
import { useState } from 'react';
import { Modal,Button, Form } from 'react-bootstrap';


function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <div className='d-flex align-items-center'>
      <h5>Upload new books </h5>
      <button onClick={handleShow} className='btn'><i className="fa-solid fa-circle-plus fs-3"></i></button>   
    </div>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add a book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="text" placeholder="Enter Book ID" />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="text" placeholder="Enter Book caption" />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="text" placeholder="Enter Book image url" />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="text" placeholder="Enter Book link" />  
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Add