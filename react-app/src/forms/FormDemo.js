import "./FormDemo.css"
import {useState} from 'react';
function FormDemo(){
    let [user,setUser]=useState({username:"",age:0,isItRained:false})


    //to handle input
    //event is implicit parameter for onchange handlers
    const handleUser=(event)=>{
        console.log(event.target.name);
        let res=event.target;
        let name=event.target.name;
        
        //let value=event.target.value;
        let checktype=event.target.type;
        let value=checktype==="checkbox"?res.checked:res.value;
        console.log("checked",event.target.checked)
        //update state use computed property
        setUser({...user,[name]:value})
    }
    //handler of form submission
    const handleFormSubmit=(event)=>{
        //stop default behaviour
        event.preventDefault();
        console.log(user)
    }


    return(
        <div>
            {/* form demo */}
            <form onSubmit={handleFormSubmit} >
                {/* input field contains onChangle handlers then it is controlled component */}
                <input type="text" name="username" onChange={handleUser}></input>
                <input type="number" name="age" onChange={handleUser}></input>
                <input type="checkbox" name="isItRained" onChange={handleUser}></input>

                {/* whenever submit clicked it send the data to backend */}
                <button type="submit">Submit</button>
            </form>
            <div>
            
                    <h3>userName:{user.username}</h3>
                    <h3>Age:{user.age}</h3>
                    <h3>isItRained:{+user.isItRained}</h3>
            

            </div>

        </div>
    )
}
export default FormDemo;
