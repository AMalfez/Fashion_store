import React,{useContext, useState, useEffect, useReducer} from 'react'
import {NavLink} from 'react-router-dom'
import { AppContext } from '../../contexts/context';
import '../../css/productComp/Sidebar.css'
import PriceFilter from '../../reducers/PriceFilter';

const InitialState = {
  range: 1000
}

function Sidebar() {
  const {PriceFilterFunc,text,handleSearch} = useContext(AppContext)
  const [state, dispatch] = useReducer(PriceFilter,InitialState)
    const [category, setCategory] = useState('/')
    const {FilteredProd} = useContext(AppContext)
    const API = "https://fakestoreapi.com/products";

    const handleRange = (e)=>{
      dispatch({type:"set__range", payload: e.target.value})
      PriceFilterFunc(e.target.value)
  }

  const handleClick =(e)=>{
   setCategory(`${e.target.value}`)
  }
  useEffect(() => {
    FilteredProd(`${API}${category}`)
    console.log("range" + state.range);
    }, [category,state.range])
  

  return (
    <div className="sidebar">
        <form className="searchForm" onSubmit={(e)=>{e.preventDefault()}}>
          <input type="text" name='search' value={text} onChange={handleSearch} placeholder="search"  className="searchbar"/>
        </form>
        <div className="categories">
          <p className="category__heading" style={{marginTop:'15px'}}>Category</p>
          <NavLink to='/products' style={{textDecoration:'none'}}  ><button onClick={handleClick} value='/' name='categroy' className="category__option">All</button></NavLink>
          <NavLink to='/products' style={{textDecoration:'none'}}  ><button onClick={handleClick} value="/category/men's%20clothing" name='categroy' className="category__option" style={{lineHeight:'2px'}}>Men's clothing</button></NavLink>
          <NavLink to='/products' style={{textDecoration:'none'}}  ><button onClick={handleClick} value="/category/women's%20clothing" name='categroy' className="category__option" style={{padding:'0'}}>Women's clothing</button></NavLink>
          <NavLink to='/products' style={{textDecoration:'none'}}  ><button onClick={handleClick} value="/category/jewelery" name='categroy' className="category__option" style={{lineHeight:'2px'}}>Jewelery</button></NavLink>
          <NavLink to='/products' style={{textDecoration:'none'}}  ><button onClick={handleClick} value='/category/electronics' name='categroy' className="category__option">Electronics</button></NavLink>
          
          <p className="category__heading" style={{lineHeight:'2px',marginTop:'30px'}}>Price</p>
          <p className="priceFilter">$<span className='range'>{state.range}</span></p>
          <input type="range" className="category__input" step="10" min='100' max='1000' value={state.range} onChange={handleRange}/>
          <button className="clear__filter" onClick={handleClick} name='clear' value='/' >CLEAR FILTER</button>
        </div>
      </div>
  )
}

export default Sidebar