import React from 'react'

function UpdateUser() {
  return (
    <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
    <div className='w-50 bg-white rounded p-3'>
        <form>
            <h2>Edit</h2>
            <div className='mb-2'>
                <label htmlFor=''>Name</label>
                <input type='text' placeholder='Enter Name' className='form-contol'/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Email</label>
                <input type='email' placeholder='Enter Emal' className='form-contol'/>
            </div>
            <div className='mb-2'>
                <label htmlFor=''>Password</label>
                <input type='password' placeholder='Enter password' className='form-contol'/>
            </div>
            <button className='btn-btn-success'>Submit</button>
        </form>

    </div>
    

</div>  )
}

export default UpdateUser