import React, { useEffect, useState } from 'react'
import { Modal,Form,Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addCategory, deleteCategory, getABook, getAllCategory, updateCategory } from '../services/allAPI';
import Bookcard from './Bookcard';



function BookCategory() {
  const [categoryName,setCategoryName]=useState("")
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [categories,setCategories]=useState([])


    const insertCategory=async()=>{
     
      if(categoryName){
        let body={
          categoryName,
          allBooks:[]
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

    const dragOverCategory=(e)=>{
      console.log("over");
      e.preventDefault()
    }

   const bookDrop=async(e,categoryId)=>{
    console.log(categoryId);
      const bookCardId=e.dataTransfer.getData("cardId")
      console.log(bookCardId);
      const {data}=await getABook(bookCardId)
      let selectedCategories=categories.find(item=>item.id===categoryId)
      selectedCategories.allBooks.push(data)
     await updateCategory(categoryId,selectedCategories)
     getCategory()

   }


  
  return (
    <>
    <div className='d-grid'>
     <button onClick={handleShow} className='btn btn-primary'>Add New Category</button>
     </div>
      
      {
        categories?categories.map(item=>(
            <div className='border p-3 rounded mt-3 mb-3' droppable onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>bookDrop(e,item?.id)}>
              <div className='d-flex justify-content-between'>
                <h5>{item?.categoryName}</h5>
                <button onClick={()=>removeCategory(item?.id)} className='btn'><i className='fa-solid fa-trash text-danger'></i></button>
              </div>
              <Row>
                {
                  item?.allBooks&&item?.allBooks.map(card=>(
                    <Col>
                    <Bookcard displayData={card}/>
                    </Col>
                    )
                  )
                }
              </Row>
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