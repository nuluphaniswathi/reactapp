import {memo} from 'react'

const Child1 = ({counter1,changeCounter1}) => {
    console.log("child1 render");
  return (
    <div>
      <h2>Child1</h2>
      <p className='text-danger'>{counter1}</p>
    </div>
  )
}

export default memo(Child1)
