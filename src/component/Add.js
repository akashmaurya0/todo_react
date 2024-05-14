import React, { useState } from 'react'


const Add = () => {
    
    
    const [title,settitle]=useState("");
    const [desc,setdesc]=useState("");
    const submit=(e)=>
        {
           e.preventDefault(); 
           if(!title || !desc)
            alert("both the fields are mendetory to fill")
        }
  return (
    <form  onSubmit={submit} className=" container  row g-3">
  <div className="col-auto">
    <label for="inputPassword2" className="visually-hidden">Password</label>
    <input type="text" className="form-control" onChange={(e)=>settitle(e.target.value)} id="inputPassword2" value={title}/>
  </div>
  <div className="col-auto">
    <label for="inputPassword2" className="visually-hidden">Password</label>
    <input type="text" className="form-control" onChange={(e)=>setdesc(e.target.value)} id="inputPassword2" value={desc}/>
  </div>
  <div className="col-auto">
    <button type="submit" className="btn btn-primary mb-3">Add</button>
  </div>
</form>
  )
}

export default Add
