import React from 'react'
import { useState } from 'react';
import { Card,Modal } from 'react-bootstrap'
import { Link } from 'react-router-dom';



function Bookcard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    <Card >
      <Card.Img onClick={handleShow}  style={{width:"100%",height:"180px"}} variant="top" src="data:image/jpeg;base64,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jfjezl2YgveQ79jg0hctaNgzzDvO3nfqYQAf2UWm/wDRYzjex1c6i9d3Ev64+XPUdvE2yEE0ZHgxBoBEd0oKeatd/iBEf2WQ6k4bo3a+JLj0APFaKy9i4ryN7sjiu8sjZ+FLgEN3n65nloOK2SSclrLr+ZGrkrLjRx7Sdfuw619k2oaTlv3lzzwJJ+S2Nox27ga/+XC92E257wPjp3W/p617oktC0Q03Ue8YfAzlq7jzyNBHZOzsSYd7SKS1hv3j3nf0g4DifNZO28yy3901MOFGmnezht7I90XMaNXO9fRd3YGzUOXAce3EzcRcODRkOOPyW1kpJkJoZDaGtGQzOpOJPErKXox4pPu+0d+S36noVURVTEREBERAREQEREBERAREQEREBERAREQEREBUIVUQaid2fgRLy3dd8TOyfEYHxC56c2QeKmG5rhoeyfsfJduinrxZ17imfLrPqvNzEmJc0c1wbo4VaeRwWzkrXgvue0Md5LsXww4EOAIOIIqDzC520Nk4b6mEdw6G9vhm31co3xaz/reqTyZ1/tOKxXtaK3BuNclpI82+K72cFpO9p3jz+ELKltnJgkMe6jG5728P7Rrzoups+z2QW7rG83G8nmfQTONa9/UZdZz6+2nsfZlsOj4tHuxDfdb/AMjzu+a6VEXozmZnIjrV1e1VERdMEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERBRERAVURAREQEREBERAREQf//Z" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
            <p>Card title</p>
            <div className='btn'><i className='fa-solid fa-trash fa-xl  text-danger'></i></div>
        </Card.Title>
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Book caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Link target='_blank' to={"https://www.junkybooks.com/book/reader.php?book=thebooks/635479551856a-modeling-structured-finance-cash-flows-with-microsoft-excel.pdf"}>
              <img width={"100%"} height={"300px"} src="data:image/jpeg;base64,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" alt="category img" />
            </Link>
        </Modal.Body>
      </Modal>

    </>
  )
}

export default Bookcard