import React from 'react'

const Test2 = ({todos,setTodos}) => {

  return (
    <div>
    
        <p className='text-primary'>
         {
            todos.map((todoObj,index)=><p key={index}>{todoObj}</p>)   
        }
         
    </p>

    </div>
  )
}
export default Test2;