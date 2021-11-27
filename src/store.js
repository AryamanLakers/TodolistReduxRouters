
import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "./todoSlice"

//store handle these reduers for us
const store = configureStore({
  reducer:{
    todos:todoReducer,
  },
})

export default store

// const initialState ={
//   type:"todolist",
//   todos:[]
// }

// export const store=createStore(reducer,initialState)