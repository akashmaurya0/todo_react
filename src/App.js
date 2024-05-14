import './App.css';
import Header from "./component/Header"
import Todos from "./component/Todos.js"
import Todo from "./component/Todo.js"
import Footer from './component/Footer.js'

import { useState } from 'react';
import Add from './component/Add.js';
function App() {
  const onDelete=(todo)=>
    {
      console.log("on delete",todo.sno);
      setTodo(todos.filter((e)=>
      {
        return e!==todo;
      }))
      
    }
  const [todos,setTodo]=useState([{
    sno:1,
    title:"go to market",
    desc:"done the job"
  },
  {
    sno:2,
    title:"go to school",
    desc:"stop thos right now"
  },
  {
    sno:3,
    title:"awsomwe",
    desc:"not so worry"
  }

]
  )
  return (
  <>
 <Header title="My Todo List"  />
 <Add/>
 <addTodo/>
 <Todos todos={todos} onDelete={onDelete}/>
 <Footer/>
  </>
  );
}

export default App;
