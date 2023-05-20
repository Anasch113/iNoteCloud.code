import React, {useContext} from 'react'
import noteContext from '../Context/notes/noteContext';
import '../Components/Noteitems.css'

export default function Noteitems(props) {
  const context = useContext(noteContext)
  const {deleteNote} = context; 
    const {note, updateNote} = props;
    
  return (
    <div className='col-md-15 my-3'>
      <div className="card">

<div className="card-body ">
    <h5 className="card-title">{note.title}</h5>
    <p className="card-text">{note.description}</p>
    <i className="fa-sharp fa-solid fa-pen-to-square mx-3" onClick={()=>{updateNote(note)}}></i>
    <i className="fa-sharp fa-solid fa-trash" onClick={()=>{deleteNote(note._id);props.showAlert("Deleted successfully", "success")}}></i>
  </div>
</div>
    </div>
  )
}

