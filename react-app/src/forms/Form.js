
import React,{useState} from 'react'
import {useForm} from 'react-hook-form'



function Form() {
        //it returns object what we need destructure
        let {register,handleSubmit,formState:{errors}}=useForm()
        //function for handle submit
        //console.log("errors",errors);
        let [user,setUser]=useState({})
        const onSubmit=(userObj)=>{
            console.log(userObj)
            setUser({...user,...userObj})
        }
    
  return (
    <div className='container  w-50  '>
    <p className='display-3 text-secondary text-center text-primary fw-bold'>User registration</p> 
        <form  className="border border-info " onSubmit={handleSubmit(onSubmit)}>
            {/* username */}
            <div className="mb-4">
                <label htmlFor='username'>username</label>
                <input type="text" {...register("username",{required:true,minLength:4})}  id="username" className="form-control"></input>
                {/* validation err msg */}
                {/* condittion && reactelement1 works like only if  */}
                {errors.username?.type==='required' && <p className='text-danger fw-bold'>Username required</p>}
                {errors.username?.type==='minLength' && <p className='text-danger fw-bold'>*min length required</p>}
            </div>
            {/* date of birth */}
        
                <div className='mb-4'>
                <label htmlFor='dob'>Date of birth</label>
                <input type="text" {...register("dob",{})} id="dob" className="form-control"></input>

                </div>
                {/* state */}
                <div className='mb-4'>
                    <label htmlFor='state'>Select State</label>
                    <select name="state" {...register("state")} id="state" className='form-select' >
                        <option value="" disabled>select state</option>
                        <option value="telangana">Telangana</option>
                        <option value="andhra pradesh">andhra pradesh</option>
                        <option value="tamilnadu">tamilnadu</option>
                        
                    </select>
                </div>
                {/* gender */}
                <div className='mb-4'>
                    {/* male */}
                    <div className='form-check'>
                        <input type="radio" {...register("gender")} id="m" className='form-check-input' value="male"/>
                        <label htmlFor="m" className='form-check-label'>Male</label>
                    </div>
                    <div className='form-check'>
                        <input type="radio" {...register("gender")} id="f" className='form-check-input' value="female"/>
                        <label htmlFor="f" className='form-check-label'>Female</label>
                    </div>

                </div>
                {/* skills */}
                <div className='mb-4'>
                <label htmlFor='skill'>Select skills</label>
                    {/* for checkbox value is not provided */}
                    {/* js */}
                    <div className='form-check'>
                        <input type="checkbox" {...register("js")} id="js" className='form-check-input' />
                        <label htmlFor="js" className='form-check-label'>Javascript</label>
                    </div>
                    {/*  */}
                    <div className='form-check'>
                        {/* haven't pass value for checkbox */}
                        <input type="checkbox" {...register("react")} id="react" className='form-check-input'/>
                        <label htmlFor="react" className='form-check-label'>React</label>
                    </div>

                </div>


                {/* about user */}
                <div className="mb-4">
                <label htmlFor='about'>Write about u</label>
                <textarea name="" {...register('about')} rows="5" className='form-control' ></textarea>
                
            </div>


            {/* form btn */}
            <button type="submit" className='btn btn-success d-block mx-auto'>Register</button>
    
    </form>
    <table>
        <thead></thead>
        <tbody>
            <tr>
                <td>{user.username}</td>
                <td>{user.dob}</td>
                <td>{user.state}</td>
                <td>{user.state}</td>
                <td>{user.gender}</td>
                {/* {
                    console.log(user.react.toString())
                */}
                {/* <td>{user.react.toString()==="true"?user.js.toString()==="true"?"react js":"react":"js"}</td> */}
            </tr>
        </tbody>
    </table>

    </div>
  )
}

export default Form
