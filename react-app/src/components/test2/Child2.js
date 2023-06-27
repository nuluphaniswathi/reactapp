import {memo} from 'react'

const Child2 = ({counter2,changeCounter2}) => {
    console.log("child2 render");
  return (
    <div>
      <h2>Child2</h2>
      <p className='text-danger'>{counter2}</p>
    </div>
  )
}

export default memo(Child2)
