import React, { useState } from 'react'
import'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
function CreateUser() {


    const [name , setName] =useState()
    const [email , setEmail] =useState()
    const [age , setAge] =useState()

    const submit =(e)=>{
        e.preventDefault()
        axios.post("http://localhost:3001/createUser", {name,email,age})
        .then(result =>console.log(result))
        .catch(err =>console.log(err))





    }

  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
        <div className='w-50 bg-white rounded p-3'>
            <form onSubmit={submit}>
                <h2>Add User</h2>
                <div className='mb-2'>
                    <label htmlFor=''>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-contol' onChange={(e)=>{
                        setName(e.target.value)
                    }}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Email</label>
                    <input type='email' placeholder='Enter Emal' className='form-contol' onChange={(e)=>{
                       setEmail( e.target.value)
                    }}/>
                </div>
                <div className='mb-2'>
                    <label htmlFor=''>Password</label>
                    <input type='password' placeholder='Enter password' className='form-contol' onChange={(e)=>{
                        setAge(e.target.value)
                    }}/>
                </div>
                <button className='btn-btn-success'>Submit</button>
            </form>

        </div>
        

    </div>
  )
}

export default CreateUser