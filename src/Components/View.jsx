import React, { useEffect, useState } from 'react'
import Bookcard from './Bookcard'
import { Row,Col } from 'react-bootstrap'
import { getAllBooks } from '../services/allAPI'


function View() {
  const [allBooks,setAllBooks]=useState([])

const getAllUploadedbooks=async()=>{
const {data}=await getAllBooks()
setAllBooks(data);
}

useEffect(()=>{
  getAllUploadedbooks()
},[])

console.log(allBooks);

  return (
    <>
    <Row>
      {
       
      allBooks.length>0?
      allBooks.map(book=>(
        <Col sm={12} md={6} lg={4} xl={3}>
        <Bookcard displayData={book}/>
      </Col>
      ))
       :"" 
      
      }
    </Row>
    </>
  )
}

export default View