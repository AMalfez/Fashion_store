import React from 'react'
import '../css/Hero.css'
import Button from 'react-bootstrap/Button';
import {NavLink} from 'react-router-dom'

function Hero() {
  return (
    <div className='hero'>
        <div className='text'>
            <h5> The Fashn Store</h5>
            <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia minus porro odio! Aut mollitia maxime aperiam, dolor corporis blanditiis adipisci! 
            </p>
            <NavLink to="/products">
            <Button variant="primary" style={{width:'40%', marginTop:'5px'}}>Shop Now</Button>{' '}
            </NavLink>
        </div>
        <div className='image'>
            <img alt='hi' src='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZmFzaGlvbnxlbnwwfHwwfHw%3D&w=1000&q=80'/>
        </div>
    </div>
  )
}

export default Hero