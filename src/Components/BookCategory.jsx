import React, { useEffect, useState } from 'react'
import { Modal,Form,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getAllCategory } from '../services/allAPI';



function BookCategory() {
  const [categoryName,setCategoryName]=useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categories,setCategories]=useState([])


    const insertCategory=async()=>{
     
      if(categoryName){
        let body={
          categoryName
        }
        //api call
        const response=await addCategory(body)
        console.log(response);
        if(response.status>=200 && response.status<300){

          //reset state
          setCategoryName("")
          handleClose()
          getCategory()

        }else{
          toast.error("please perform action after sometime")

        }

      }else{
        toast.info("please fill the form")
      }
    }


    const getCategory=async()=>{
      const{data}=await getAllCategory()
      setCategories(data)
      
    }

    useEffect(()=>{
      getCategory()
    },[])


    const removeCategory=async(id)=>{
        await deleteCategory(id)  
        getCategory()
    }


  
  return (
    <>
    <div className='d-grid'>
     <button onClick={handleShow} className='btn btn-primary'>Add New Category</button>
     </div>
      
      {
        categories?categories.map(item=>(
            <div className='border p-3 rounded mt-3 mb-3'>
              <div className='d-flex justify-content-between'>
                <h5>{item?.categoryName}</h5>
                <button onClick={()=>removeCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              </div>
            </div>
        )): <p>nothing to display</p>
      }

    
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
             <Form.Control type="text" placeholder="Enter category name" onChange={(e)=>setCategoryName(e.target.value)} />  
          </Form.Group>
         
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            cancel
          </Button>
          <Button onClick={insertCategory}  variant="primary">Add</Button>
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

export default BookCategory