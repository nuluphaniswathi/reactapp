import React,{useRef} from "react"
function UncontrolledFormDemo(){
    //useRef for uncontrolled component 
    let usernameRef=useRef();
    let ageRef=useRef();

    //handle form submission
    const handleFormSubmit=(event)=>{
        event.preventDefault();
        console.log(event);
        console.log(usernameRef);
        console.log(usernameRef.current.value)
        console.log(ageRef.current.value)
        
    }
    return(
        <form onSubmit={handleFormSubmit} >
                {/* input field contains onChangle handlers then it is uncontrolled component */}
                <input type="text" name="username" ref={usernameRef} ></input>
                <input type="number" name="age" ref={ageRef}></input>
                <input type="checkbox" name="isItRained"></input>

                {/* whenever submit clicked it send the data to backend */}
                <button type="submit">Submit</button>
            </form>
    );
}
export default UncontrolledFormDemo;
