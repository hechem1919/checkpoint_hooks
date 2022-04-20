import { useState } from "react";
import { Modal,Button } from "react-bootstrap";

function AddMovie({handleAdd}) {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    const [posterURL, setPosterURL] = useState('')
    const [title, setTitle] = useState('');
    const [year, setYear] = useState(0);
    const [director, setDirector] = useState('');
    const [rate, setRate] = useState(0);  
    
  
  
    return (
      <>
        <Button variant="primary" onClick={handleShow}>
          Add to collection
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add form</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            
     <input type="text" placeholder="Cover" value={posterURL} onChange={(e)=> setPosterURL( e.target.value)}/>
     <input type="text" placeholder="Title" value={title} onChange={(e)=> setTitle ( e.target.value)}/>
     <input type="text" placeholder="Year" value={year} onChange={(e)=> setYear ( e.target.value)}/>
     <input type="text" placeholder="Director" value={director} onChange={(e)=> setDirector ( e.target.value)}/>
     <input type="text" placeholder="Rate" value={rate} onChange={(e)=> setRate ( e.target.value)}/>
      </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary"  
            onClick={()=>handleAdd({id:Math.random(), posterURL, title, year, director, rate})}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
export default AddMovie;