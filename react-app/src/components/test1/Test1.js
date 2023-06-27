import './Test1.css'
function Test1(props){
    //props is an object which receives the data from the parent
    //for simple use we destructure it
    let {sampleData1,sampleData2,getDataFromChild,obj,getObjectFromChild}=props;
    //function to recieve data from child
    let childData=1234;
    let childObj={
        sno:1,
    sname:"swathi"
    }

    return (
        <div className='child bg-danger border-top mt-5 p-4 text-primary'>
            <h1>Child test1</h1>
            <h5>Data received from the parent is {sampleData1} - {sampleData2}</h5>
            <h6>sno-{obj.sno}</h6>
            <h6>sname-{obj.sname}</h6>
            
            <button className='btn btn-primary me
            -3' onClick={()=>getDataFromChild(childData)}>Send Data to Parent</button>
            <button className='btn btn-primary' onClick={()=>getObjectFromChild(childObj)}>send Obj to parent</button>
        </div>
    )
}
export default Test1;