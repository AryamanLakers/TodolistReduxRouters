import React, {useEffect}from 'react';
import './App.css';
import Login from "./Login"
import TodoList from './components/TodoList';
import { BrowserRouter as Router, Route, Routes, Switch ,Link, Navigate} from "react-router-dom";
import {useSelector} from "react-redux"

function App() {
  const data=useSelector((state)=>state.todos)
  
  function PrivateRoute({ children }) {
    const auth = data.islogged;
    console.log(auth)
    return auth ? children : <Navigate exact to="/" />;
  }
  
  return (
          <div className="todo-app">
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route
                    path="/todolist"
                    element={
                      <PrivateRoute>
                        <TodoList />
                      </PrivateRoute>
                    }
                />
              </Routes>
          </div>
          
      
      );
}

export default App;
