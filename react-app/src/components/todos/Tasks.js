import {useState} from 'react'
import AddToDo from './AddToDo'
import TodoCount from './TodoCount'
import TodoList from './TodoList'


 const Tasks = () => {
    let [todos,setTodos]=useState([])
   // let [state1,setState]=useState(0);

  return (
    <div className='text-center'>
        <div className='bg-dark text-primary'>To-Dos app</div>
       
        <div className='row container'>
            <div className=' col-sm-4'><AddToDo todos={todos} setTodos={setTodos}/></div>
            <div className=' col-sm-4'><TodoList todos={todos} setTodos={setTodos}/></div>
            <div className='col-sm-4'><TodoCount todos={todos} setTodos={setTodos}/></div>
        </div>
       
    
    </div>
  )
}
export default Tasks;
