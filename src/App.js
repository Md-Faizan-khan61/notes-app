import React, { useState } from 'react'
import './App.css';
import NoteList from './NoteList';
import NoteForm from './NoteForm';

function App() {
   const [item, setItem] = useState([])
   const [currentNote , setCurrentNote] = useState({text:'',id:0}) 
   function prof(note) {
      return (
         note.id =item.length + 1,
         setItem([...item, note])        
         //console.log(item)
      )
   }
   function handleDel(i) {
      const filteredNum = item.filter((item, index) => index != i)
      return (
         setItem(filteredNum),
         console.log(i)
      )
   }
   function editNote(note) {   // {text:'shit'}
      return (
         setCurrentNote(note),
         console.log(note)
         //console.log(currentNote)
      )
   }

   function updateNote(updatedNote) {
      return (
         setItem( item.map((note)=>
            note.id === updatedNote.id ? updatedNote : note
          ))
      )
   }

   return (
      <div>
        
         <NoteForm prof={prof} currentNote={currentNote} updateNote={updateNote}/>
         <NoteList item={item} handleDel={handleDel} editNote={editNote} />
      </div>
   )
}

export default App;
