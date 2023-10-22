import React from 'react'
import { useState } from 'react';
import { Modal,Button, Form } from 'react-bootstrap';
import { uploadBook } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Add() {
  const[book,setBook]=useState({
    id:"",caption:"",url:"",link:""
  })
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // console.log(book);
  const handleUpload=async()=>{
    const{id,caption,url,link}=book
    if(!id||!caption||!url||!link){
      toast.warning("please fill the form completely")
    }else{
      // make api call
      const response=await uploadBook(book)
       if(response.status>=200&&response.status<300){
          
      //modal hide 
      handleClose()
      toast.success(`${response.data.caption} is uploaded successfully`)
       }else{
        toast.error("please provide unique id")
       }

    }
  }

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
             <Form.Control type="text" placeholder="Enter Book ID" onChange={(e)=>setBook({...book,id:e.target.value})} />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="text" placeholder="Enter Book caption"  onChange={(e)=>setBook({...book,caption:e.target.value})} />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="text" placeholder="Enter Book image url" onChange={(e)=>setBook({...book,url:e.target.value})} />  
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Control type="text" placeholder="Enter Book link" onChange={(e)=>setBook({...book,link:e.target.value})} />  
          </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button onClick={handleUpload} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>


      <ToastContainer
position="top-center"
autoClose={2000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>
    </>
  )
}

export default Add