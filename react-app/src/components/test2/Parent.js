import React,{useState,useCallback} from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

const Parent = () => {
    console.log("parent render");
    let [counter1,setCounter1]=useState(100);
    let [counter2,setCounter2]=useState(50);
    //useCallback takes two argument callbackfun,[]dependency array
    //if counter1 change then it creates a new copy of function
    const changeCounter1=useCallback(()=>{
      setCounter1(counter1+1) 
    },[counter1])
    //if counter2 chage then it creates a new copy of function else it is not created a copy
    const changeCounter2=useCallback(()=>{
      setCounter2(counter2+1)  
    },[counter2])

  return (
    <div className='text-center '>
      <h1>Parent</h1>
      <h4>Count:{counter1}</h4>
      <button className=' btn btn-primary m-3' onClick={changeCounter1}>changeCount1</button>
      <button className=' btn btn-primary' onClick={changeCounter2}>changeCount2</button>
      {/* nest child1 and child2 */}

      <Child1 counter1={counter1} changeCounter1={changeCounter1}/>
      <Child2 counter2={counter2} changeCounter2={changeCounter2}/>
    </div>
  )
}

export default Parent
