import { createSlice } from '@reduxjs/toolkit'

//the slice is responsible for updating and controlling the state 
const todoslice = createSlice({
    name: 'todos',
    initialState: {
      todos:[],
      islogged:false
      },
    reducers: {
      
      addtodo:(state,action)=>{
        const newtodo={
            title:action.payload.title
        }
        state.todos.push(newtodo);
      },
      
      deletetodo:(state,action)=>{
        const newarr=state.todos.filter((todo,index)=>index!==action.payload.index)
        return {...state,todos:newarr}
      },

      isLogin:(state,action)=>{
        return {
          ...state,
          islogged: action.payload.status,
      }
        
      }
      
    },
  });
  
  export const { addtodo, deletetodo, isLogin} = todoslice.actions;
  export default todoslice.reducer