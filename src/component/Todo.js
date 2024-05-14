import React from 'react'

export default function Todo({todo,onDelete}) {
  return (
    <div>
    <h4>{todo.sno}</h4>
     <h4>{todo.title}</h4>
     <h4>{todo.desc}</h4>
    <button className='btn btn-sm btn-primary' onClick={()=>onDelete(todo)}>delete</button>
    </div>
  )
}
