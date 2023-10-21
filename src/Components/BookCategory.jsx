import React, { useState } from 'react'
import { Modal,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';




function BookCategory() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    <div className='d-grid'>
     <button onClick={handleShow} className='btn btn-primary'>Add New Category</button>
     </div>
    
     <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="text" placeholder="Enter category name" />  
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

export default BookCategory