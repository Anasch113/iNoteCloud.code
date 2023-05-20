import React, { useState, useContext } from 'react'
import '../Components/AddNote.css'
import noteContext from '../Context/notes/noteContext';
const AddNote = (props) => {
    const context = useContext(noteContext)
    const { addNote} = context;

    const [note, setNote] = useState({title:"", description: "", tag: ""})
    const handleclick = (e)=>{
        e.preventDefault();
addNote(note.title, note.description, note.tag);
setNote({title:"", description: "", tag: ""})
props.showAlert("Note added successfully", "success")
    }

    const onChange = (e)=>{
        setNote({...note, [e.target.name]: e.target.value})
    }
    return (
        <div>
            <div className="addnote-container my-3" showAlert = {props.showAlert}>
                <h3>Add your <span>note here</span> </h3>
                <form showAlert = {props.showAlert}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1"  className="form-label">Tag</label>
                        <input type="text" onChange={onChange} value={note.title} className="form-control" id="title" name='title' aria-describedby="emailHelp"   />
                        <div id="title" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Title</label>
                        <input type="text" onChange={onChange} value={note.description} className="form-control" name='description' id="description" minLength= {3} required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                        <input type="text" onChange={onChange} value={note.tag} className="form-control" name='tag' id="tag" minLength= {3} required />
                    </div>
                   
                    <button disabled ={note.tag.length<4 || note.description.length<4} type="submit" onChange={onChange} onClick={handleclick} className="btn btn-success">Add Note</button>
                </form>
            </div>
        </div>
    )
}

export default AddNote

