import React,{useContext} from 'react'
// import Test1 from './Test1';
// import Test2 from './Test2';
 import { todoContext } from '../../context.js/todoContext'
const TodoCount = () => {
  let [todos]=useContext(todoContext)
  return (
    <div>
      <p>ToDoCount</p>
      {/* <Test1 todos={todos} setTodos={setTodos}/> */}
      {/* <Test2 todos={todos} setTodos={setTodos}/> */}
        {/* <p className='display-6 text-warning'>Total no of tasks</p> */}
        <h1>NoofTasks:{todos.length}</h1>
    </div>
  )
}
export default TodoCount;
