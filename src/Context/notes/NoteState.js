import React, {useState} from 'react'
import NoteContext from "./noteContext"

const NoteState = (props)=>{
  const host = "http://localhost:5000"

    const notesInitial = []
    
  const [notes, setNotes] = useState(notesInitial)


  });
  const json = await response.json()
  console.log(json)
  setNotes(json)

}




  // Add a note
const addNote = async ( _id, title, description, tag)=>{

  // API CALL
  const response = await fetch(`${host}/api/notes/addnote`, {
    method: "POST", 
    
    headers: {
      "Content-Type": "application/json",
      "auth-token" : localStorage.getItem('token')
      
    },
  
    body: JSON.stringify({ title, description, tag}), 
  });
  const note = await response.json(); 
  setNotes(notes.concat(note));
 

}
  // Delete a note
  const deleteNote = async (id)=>{

     // API CALL
  const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
    method: "DELETE", 
    
    headers: {
      "Content-Type": "application/json",
      "auth-token" : localStorage.getItem('token')
      
    },
  
    

  }



  //Edit a note
  const editNote = async(id, title,  description, tag)=>{
  // API CALL
  coheaders: {
      "Content-Type": "application/json",
      "auth-token" : localStorage.getItem('token')
      nst response = await fetch(`${host}/api/notes/updatenote/${id}`, {
    method: "PUT", 
    
    
    },
  
    body: JSON.stringify({title, description, tag}), 
  });
  const json = await response.json(); 
  console.log(json)

  let newNotes = JSON.parse(JSON.stringify(notes))


  // Logic to edit a note
  
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id ===id){
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
      }
      
    }
    setNotes(newNotes)
  }
return(

    <NoteContext.Provider value = {{notes , addNote, deleteNote, editNote, getNotes}}>
        {props.children}
    </NoteContext.Provider>
    
)
}

export default  NoteState;
