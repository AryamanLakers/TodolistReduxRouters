export default (state,action)=>{
    
    return {
        type:"todolist",
        todos:action.todos?action.todos:[]
      }
    
    return state
   
}