import React from 'react'
import { useForm} from 'react-hook-form'
import {useContext,useState} from 'react'
import { todoContext } from '../../context.js/todoContext'

const AddToDo = () => {
    let {register,handleSubmit}=useForm();
    let [state,setState]=useState(false)
    let [todos,setTodos]=useContext(todoContext)


    const onSubmit=(taskObj)=>{
        //taskObj.preventDefault();
        
        
        const task=taskObj.task.toLowerCase();
        if(todos.find(exist=>exist.toLowerCase()===task))
        {
          setState(true)
        }
        else{
          setTodos([...todos,taskObj.task])
          setState(false)
        }
      
        console.log(todos);
        console.log("taskobj",taskObj)
        console.log("todoslist",todos)
  
    }
  return (
    <div className='bg-light p-3'>
        <p className='display-3 text-warning'>Add new Task</p>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type='text' {...register("task")} className='form-control mb-4' name="task" id="task" placeholder='Add task'></input>
            <button className='btn btn-outline-warning f-right'>Add Task</button>
            {
              (state===true)&&<h2>task already exists</h2>
            }
        </form>
            
        <div> 
        </div>
    </div>
  )
}
export default AddToDo;