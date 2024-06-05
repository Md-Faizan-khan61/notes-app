import { useEffect, useState } from "react"

const NoteForm = ({ prof, currentNote, updateNote }) => {
    const [note, setNote] = useState(currentNote)

    //the dependency array indicates that the effect should run only when 'currentNote' changes
    useEffect(() => {
        setNote(currentNote)
    }, [currentNote])
    //the useEffect func is executed whenever currentNote changes. inside this func the 'setNote'
    // state updater is called with the new 'currentNote' value. ensuring that the local state 'note'
    // is always in sync with the 'currentNote' property. 
    //without this synchronization the form might not display the correct text to be edited
    const handleSubmit = (e) => {
        e.preventDefault()
        if (note.id) {
            updateNote(note)
            console.log("update", note.id);
        } else {
            prof(note)
            console.log(note)
        }
        setNote({ text: '', id: 0 })
    }
    const handleChange = (e) => {
        setNote({ ...note, text: e.target.value })
    }

    return (
        <div style={{display:'flex',flexDirection:'column', justifyContent:"center",alignItems:'center',background:'#eeeeee'}}>
            <div>
                <h2>notes-app</h2>
            </div>
            <div>
                <form onSubmit={handleSubmit} style={{display:'flex', justifyContent:'space-between',alignItems:'center'}}>
                    <input
                        style={{fontSize:'20px',padding:'3px'}}
                        type="text"
                        value={note.text}
                        placeholder=" Enter note"
                        onChange={handleChange}
                    />
                    <button style={{padding:'5px',fontSize:'15px',marginLeft:'3px'}} type="submit">Create/upd</button>
                </form>
            </div>
        </div>
    )
}

export default NoteForm