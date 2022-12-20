import React, { useContext } from 'react'
import {NavLink} from 'react-router-dom'
import { AppContext } from '../contexts/context'
import '../css/Feature.css'
import ReactLoading from "react-loading"

function Feature() {
    const {isLoading, products} = useContext(AppContext);
    const featuredProd = products.slice(1,4);
    console.log(featuredProd);
    const featuredComp = []

    for (let index = 0; index < featuredProd.length; index++) {
        featuredComp.push(<NavLink key={featuredProd[index].id} to={`/product/${featuredProd[index].id}`} style={{width:'30%',display: 'flex', alignItems: 'center', justifyContent: 'center'}}><img src={featuredProd[index].image} id={featuredProd[index].id} alt='imagei' style={{width: '35%', height: 'auto'}}/></NavLink>)
        
    }

if (isLoading) {
    return(<div style={{display: 'flex', justifyContent:'center', alignItems:'center'}}><ReactLoading type='balls' color='black' height={667} width={375}/></div>)
} else {
    return (
        <>
        <div className='container'>
            <p>CHECK OUT</p>
            <h1 style={{marginBottom: '25px'}}>Featured Products</h1>
            <div className='featuredP' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                {featuredComp}
            </div>
        </div>
        </>
      )
}
  
}

export default Feature