import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from "./Nav"
import '../css/Header.css'
function Header() {
  return (
    <div className='header'>
        <NavLink to="/" style={{textDecoration: 'none', color: 'black',zIndex: 1}}>
            <h5 style={{margin: '10px 20px'}}>Logo</h5>
        </NavLink>
        <Nav/>
    </div>
  )
}

export default Header