import React from 'react';
import { RiCloseCircleLine } from 'react-icons/ri';
import {useSelector} from "react-redux"

const Todo = ({ removeTodo}) => {
  const todos=useSelector((state)=>state.todos)
  console.log(todos)
  return todos.todos.map((todo, index) => (
    <div
      className='todo-row'
      key={index}
    >
      <div key={todo.id}>
        {todo.title}
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={(e) => {console.log(e);removeTodo(index)}}
          className='delete-icon'
        />
        
      </div>
    </div>
  ));
};

export default Todo;
