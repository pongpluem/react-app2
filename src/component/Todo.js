import Modal from "./Modal";
import Backdrop from "./Backdrop";
import { useState } from "react";
import { Button } from 'primereact/button';     


function ToDo(props) {

    const [modalIsOpen, setModalIsOpen] = useState(false);

    function deleteHandle(){    
        setModalIsOpen(true)
    }

    function closeHandle(){    
        setModalIsOpen(false)
    }

    return (
      
        <div className='card'>
          <h2>{props.text}</h2>        
          {/*
          <button className='btn' onClick={deleteHandle}>Delete</button>
        */}

            <Button label="Delete" icon="pi pi-shopping-bag"></Button>

          {modalIsOpen && <Modal onCancel={closeHandle} onConfirm={closeHandle}/>}
          {modalIsOpen && <Backdrop/>}

        </div>
  
      
    );
  }

  
  
  export default ToDo;