import React, { useState } from 'react'
import Add from '../Components/Add'
import View from '../Components/View'
import BookCategory from '../Components/BookCategory'

function Home() {
  const[uploadBookResponse,setUploadBookResponse]=useState({})
  return (
    <>
    <div className='mt-5 d-flex justify-content-center align-items-center mb-5 container'>
      <Add setUploadBookResponse={setUploadBookResponse}/>
    </div>
    <div className='mt-5 d-flex justify-content-between  mb-5 container-fluid'>
      <div className='allbooks col-lg-8'>
        <h3>All books</h3>
        <View uploadBookResponse={uploadBookResponse}/>
      </div>
      <div className='col-lg-1'></div>
      <div className='col-lg-3'>
      <BookCategory/>

      </div>
    </div>
    </>
  )
}

export default Home