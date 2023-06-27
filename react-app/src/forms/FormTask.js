import React,{useState} from 'react'
import '../App.css'
import {useForm} from 'react-hook-form'
function FormTask() {
    let {register,handleSubmit,formState:{errors},reset}=useForm()
    let [user,setUser]=useState([])
    console.log(user)
    const onSubmit=(userObj)=>{
        console.log(userObj);
        setUser([...user,userObj])
        reset()
    }
  return (
    <div>
        <p className='display-4 text-center text-primary  fw-bold'>Employee Registration</p> 
        <div className='container  w-50  bg-white border border-5 rounded'>
        <form className="empform"  onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-4'>
                <label htmlFor='name' className='fw-semibold '>Name</label>
                <input type="text" {...register("name",{required:true,minLength:4,maxLength:8})} id="name" className="form-control "></input>
                {/* employee name validation */}
                {errors.name?.type==='required' && <p className='text-danger fw-bold'>*Username is required*</p>}
                {errors.name?.type==='minLength' && <p className='text-danger fw-bold'>*min length of employee is 4*</p>}
                {errors.name?.type==='maxLength' && <p className='text-danger fw-bold'>*max length of employee is 8*</p>}
               

            </div>
            <div className='mb-4'>
                <label htmlFor='doj' className='fw-semibold '>Date of Joining</label>
                <input type="date" {...register("doj",{required:true})} id="doj" className="form-control"></input>

            </div>
            <div className='mb-4'>
                <label htmlFor='designation' className='fw-semibold '>Designation</label>
                <input type="text" {...register("designation",{required:true})} id="designation" className="form-control"></input>
                {errors.name?.type==='required' && <p className='text-danger fw-bold'>*Designation is mandatory field*</p>}
            </div>
            <div className='mb-4'>
                <label htmlFor='salary' className='fw-semibold '>Salary</label>
                <input type="number" {...register("salary",{required:true,min:50000,max:200000})} id="salary" className="form-control"></input>
                {/* salary validation */}
                {errors.salary?.type==='required' && <p className='text-danger fw-bold'>*salary field is required*</p>}
                {errors.salary?.type==='min' && <p className='text-danger fw-bold'>*min salary required*</p>}
                {errors.salary?.type==='max' && <p className='text-danger fw-bold'>*max salary required*</p>}
            </div>

             {/* form btn */}
             <div className='d-md-block '>
             <button type="submit" className='btn btn-success m-4'>Register</button>
             <button type="reset" className='btn btn-warning '>Reset</button>
             </div>

        </form>
        </div>
        <div>
            <p className="display-3 text-secondary text-center text-success fw-bold">Registered Users</p>
            <table class="table align-middle table-bordered table-striped table-hover w-50 
            justify-content-center ">
            <thead className="table-dark">
                <tr><th
                >Name</th><th>DOJ</th><th>Designation</th><th>salary</th></tr>
            </thead>
            <tbody>
            {
                    user.map((userObj)=>{
                    return(<tr key={userObj.name}>
                    <td>{userObj.name}</td>
                    <td>{userObj.doj}</td>
                    <td>{userObj.designation}</td>
                    <td>{userObj.salary}</td>
                </tr>)
                    }
                )}
            </tbody>
        </table>
        </div>
        
    </div>
  )
}

export default FormTask
