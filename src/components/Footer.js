import React from 'react'
import '../css/Footer.css'
import {AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
import {FaDiscord} from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className='footer__desc'>
        <p>Ready to get started? <br/> Talk to us today. </p>
        <a href='/'>Get started</a>
      </div>
      <div className='footer__extra'>
      <div className='footer__info'>
        <div className='col first'>
          <p>The Fashion Store</p>
          <p>Buy the best brands at best price only on our store.</p>
        </div>
        <div className='col second'>
          <p>Subscribe for to get important updates</p>
          
          <input type='text' placeholder='Your Email'/><br/>
          <input type='submit'/>
        </div>
        <div className='col third'>
          <p>Follow us</p>
          <AiFillInstagram style={{border: '2px solid white', borderRadius: '50%', padding: '5px', fontSize:'8px', width:'30px', height:'30px', marginRight:'7px'}} />
          <AiFillLinkedin style={{border: '2px solid white', borderRadius: '50%', padding: '5px', fontSize:'8px', width:'30px', height:'30px', margin: '0px 7px'}} />
          <FaDiscord style={{border: '2px solid white', borderRadius: '50%', padding: '5px', fontSize:'8px', width:'30px', height:'30px', margin: '0px 7px'}} />
        </div>
        <div className='col fourth'>
          <p>Call us <br/> +143-123456789</p>
        </div>
      </div>
      <div className='footer__info InfoSecond' style={{marginTop:'20px'}}>
        <div className='col'>
          <p>@2022 The Fashion Store All rights reserved</p>
        </div>
        <div className='col' style={{marginLeft:'15%'}}>
          <p>Privacy policy</p>
          <p>Terms and conditions</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Footer