import React from 'react'
import {NavLink} from 'react-router-dom'
import '../css/About.css'
import Button from 'react-bootstrap/Button';

function About() {
  return (
    <>
    <div className='about__container'>
      <div className='about__heading'>
        <p className='heading' >ABOUT US</p>
        <p className='desc' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel consequuntur, dignissimos possimus dolorum nisi, tempore perferendis ut facere fuga ad reprehenderit esse ex quos minima, debitis molestias porro. Sequi eligendi, nihil ipsum at perferendis ducimus et similique consequatur corporis hic id? Dignissimos et error ipsam, non harum tenetur quidem nam maxime libero, eligendi sed iure repudiandae accusantium eius amet itaque quis neque.</p>
        <NavLink to='/'><Button variant="primary" style={{marginTop:'20px'}}>Learn more</Button></NavLink>
      </div>
      <div className='about__pics'>
        <img src='https://media.istockphoto.com/id/1307768150/vector/about-us-concept-illustration-for-corporate-website-menu.jpg?b=1&s=612x612&w=0&k=20&c=hVVy5u4XiUSWCAMwdji-QEurokP3UFwtB9rRIivb6qA=' />
      </div>
    </div>
    </>
  )
}

export default About