import React from 'react'
import {AiOutlineAmazon} from 'react-icons/ai'
import {SiFlipkart} from 'react-icons/si'
import {SiAdidas,SiShopify, SiNike} from 'react-icons/si'
import '../css/Trusted.css'
function Trusted() {
  return (
    <div className='trusted'>
      <p className='trusted__heading'>
        Trusted by 1000+ Companies
      </p>
      <div className='trusted__icons'>
        <AiOutlineAmazon style={{margin:'5px 4rem', fontSize:'2.5rem',color:'gray'}}/>
        <SiFlipkart style={{margin:'5px 4rem', fontSize:'2.5rem',color:'gray'}}/>
        <SiAdidas style={{margin:'5px 4rem', fontSize:'2.5rem',color:'gray'}}/>
        <SiShopify style={{margin:'5px 4rem', fontSize:'2.5rem',color:'gray'}}/>
        <SiNike style={{margin:'5px 4rem', fontSize:'2.5rem',color:'gray'}}/>
      </div>
    </div>
  )
}

export default Trusted