import React from 'react'

const LoginUser = () => {
  return (
    <>
       <div className="d-flex justify-content-center align-items-center mt-4">
        <div  className="border border-2 border-primary p-4 rounded rounded-3">
          <h1 className="bi bi-person">User Login</h1>
          <dl>
            <dt>User Name</dt>
            <dd>
              <input
                type="text"
                name="firstname" 
                className="form-control"
              />
            </dd>
            <dt>Password Name</dt>
            <dd>
              <input
                type="password"
                name="password" 
                className="form-control"
              />
            </dd>
            </dl>
            <button className="btn btn-primary w-100">Sumbit</button>
        </div>
      </div> 
    </>
  )
}
 export default LoginUser
