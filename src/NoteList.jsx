const NoteList = ({item, handleDel ,editNote}) => {
    
    return (
        <div>
           {
            item.map((note,id)=>
<div>
<div key={id} style={{display:"flex",justifyContent:"space-around"}}>
    <h3>Id :{note.id}</h3>
    <h4>Text :{note.text}</h4>
    <div style={{marginTop:"20px"}}>
    <button onClick={()=>handleDel(id)}
    >del</button>
    <button style={{marginLeft:'4px', color:'lightgreen',background:'black'}} onClick={()=>editNote(note)}
    >edit</button>
    </div>
    </div>
    <hr />
    </div>
            )
           }
        </div>
    )
}

export default NoteList