import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/Error.css'
function Error() {
  return (
    <div className='container'>
      <p className='p'>404</p>
      <h3>Uh oh!</h3>
      <h4 >Nothing here</h4>
      <NavLink to='/'>
      <button className='button' style={{marginTop:'20px'}}>Go Back to Home</button>
      </NavLink>
    </div>
  )
}

export default Error