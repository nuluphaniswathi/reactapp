import React,{useContext} from 'react'
import { todoContext } from '../../context.js/todoContext'

const TodoList = () => {
    let [todos,setTodos]=useContext(todoContext);
    const deleteTask=(ind)=>{
        let newtodos=todos.filter((todos,index)=>{
            if(index!==ind){
                return todos;
            }
            else{
                return 0;
            }
        })
         setTodos(newtodos);
    }
  return (
    <div className='display-6 text-warning'>TodoList
    <p className='text-primary'>
         {
            todos.map((todoObj,index)=><div key={index}> {todoObj} <button className='btn btn-primary' onClick={()=>deleteTask(index)}>DeleteTask</button></div
            >)   
        }
         
    </p>
    
    </div>
  )
}
export default TodoList;

