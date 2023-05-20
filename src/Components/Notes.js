import React, {useContext, useEffect, useRef, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import noteContext from '../Context/notes/noteContext';
import Noteitems from './Noteitems';
import AddNote from './AddNote';
import '../Components/Notes.css'


export default function Notes(props) {
  let navigate = useNavigate();
    const context = useContext(noteContext)
    const {notes, getNotes, editNote} = context;


    const [note, setNote] = useState({ id: "", etitle:"", edescription: "", etag: ""})
    

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    useEffect(()=>{
    
      if(localStorage.getItem('token')){
        getNotes()

      }
      else{
        navigate("/login")
      }
      // eslint-disable-next-line
    },[] )

    const handleClick = ()=>{
     
      editNote(note.id, note.etitle, note.edescription, note.etag);
      setNote({etitle:"", edescription: "", etag: ""})
      refClose.current.click();
      props.showAlert("Updated successfully", "success")
    }

    const updateNote = (currentNote)=>{
      ref.current.click()
setNote({id : currentNote._id, etitle : currentNote.title, edescription: currentNote.description, etag : currentNote.tag})
    }
    const ref = useRef(null)
    const refClose = useRef(null)
  return (
    <>
      <AddNote showAlert = {props.showAlert}/>
  
<button type="button" className="btn btn-primary d-none" data-bs-toggle="modal" ref={ref} data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Edit Note</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Title</label>
                        <input value={note.etitle} type="text" onChange={onChange} className="form-control" id="etitle" name='etitle' aria-describedby="emailHelp" />
                        <div id="title" className="form-text" minLength= {4} required ></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" onChange={onChange} value={note.edescription} className="form-control" name='edescription' id="edescription" minLength= {4} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Tag</label>
                        <input type="text" onChange={onChange} className="form-control" value={note.etag} name='etag' id="etag" />
                    </div>
                   
                   
                </form>
      </div>
      <div class="modal-footer">
        <button  ref = {refClose} type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled = {note.etitle.length<5 || note.edescription.length<5} onClick={handleClick} type="button" class="btn btn-success">Update Note</button>
      </div>
    </div>
  </div>
</div>
       <div className="row-1 my-3 ">
      <h2 id='h2-text'>Your <span>Notes</span> </h2><div className="container1">

      
      {notes.length===0 && 'No notes to display'}
      
</div>
{  notes.map((note)=>{
  return <Noteitems  updateNote={updateNote} note={note} />
}

)}
     </div>
    </>
  )
}

