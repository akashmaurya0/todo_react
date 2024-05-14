import React from 'react'
import Todo from './Todo.js'

export default function Todos(props) {
  const pst={
    textAlign:"center"
  }
  return (
    <div className='container'>
      <h3 className='text-center'>Todos list </h3>
      {  props.todos.length>0?
          (props.todos.map((todo)=>
            {
              return (
                <>
                <Todo todo={todo} key={todo.sno}onDelete={props.onDelete}/>
                </>
                
              )
            }
          )):<>
          <p style={pst}>list is empty</p>
          </>
      }
    </div>
  )
}
 