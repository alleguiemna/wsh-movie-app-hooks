import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";

const AddMovie = ({ handleAdd }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [title, setTitle] = useState("")
 const [description, setDescription] = useState("")
 const [rate, setRate] = useState(0)
 const [url, setUrl] = useState()
 const handleSubmit = (e) =>{
   e.preventDefault()
   const newMovie={
     id:Math.random(),
     title,
     description,
     posterUrl:url,
     rate
   }
  if(rate && title && description && url){
    handleAdd(newMovie)
    setTitle("")
    setUrl()
    setRate()
    setDescription("")
  }
  else{
    alert("missing fields")
  }
 }
 
  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        Add
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            Title:
            <input
              type="text"
              className="form-control"
              placeholder="enter movie title please"
              onChange={e=>setTitle(e.target.value)}
              value={title}
            />
            Description:
            <input
              type="text"
              className="form-control"
              placeholder="enter movie description please"
              onChange={e=>setDescription(e.target.value)}
              value={description}
            />
            PosterUrl:
            <input
              type="url"
              className="form-control"
              placeholder="enter movie url please"
              onChange={e=>setUrl(e.target.value)}
              value={url}
            />
            Rate:
            <input
              type="number"
              className="form-control"
              placeholder="enter movie rate please"
              onChange={e=>setRate(e.target.value)}
              value={rate}
            />
            <Button variant="primary" type="submit">
            Save Changes
          </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddMovie;
