import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import {useDispatch} from "react-redux";
import { addtodo, deletetodo, isLogin } from "../todoSlice"
import {GoogleAPI, GoogleLogin, GoogleLogout} from 'react-google-oauth'
//i have to make a store to keep todos array from
//i will have 2 options: first to add,remove and updateTodo
// function actionCreator(newlist){
//   return {
//     type:"todolist",
//     todos:newlist
//   }
// }

function TodoList() {
  const dispatch=useDispatch()
  
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
   
    dispatch(
      addtodo({
      title:todo.text
    })
    );
    //const newTodos = [todo.text, ...store.getState().todos];
    //store.dispatch(actionCreator(newTodos));//this would go to reducer
    
  };

 
 
  const removeTodo = id => {
    console.log(id)
    dispatch(deletetodo({
      index:id
    }))
    //const removedArr = [...store.getState().todos].filter((todo,ind) => ind !== id);
   // console.log(removedArr,1223)
   // store.dispatch(actionCreator(removedArr))
    
  };

  
  const onLogout=()=>{
    dispatch(isLogin({status:false}))
  }
  return (
    <div>
      <GoogleAPI>
          <GoogleLogout onLogoutSuccess={onLogout}/>
      </GoogleAPI>
      
      <h1>What's the Plan for Today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        removeTodo={removeTodo}
      />
    </div>
  );
}

export default TodoList;
