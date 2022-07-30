import React, { Component } from 'react'

export default class Example extends Component {
  title=`Ready to watch ? Enter your email to create or restart your membership`
  render() {
    return (
      <>
        <div className='d-flex bg-dark p-4 justify-content-center align-items-center mt-4'>
          <div>
            <p className='text-white'>{this.title}</p>
            <div className='input-group'>
             <input  type='email' placeholder='Your email address' className='form-control' />
             <button className=' btn btn-danger'>
              Get started 
              <span className='bi bi-chevron-right'></span>
             </button>
            </div>
          </div>
        </div> 
      </>
    )
  }
}
