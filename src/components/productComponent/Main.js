import React, { useState, useContext, useReducer, useEffect} from 'react'
import '../../css/productComp/Main.css'
import {AiOutlineUnorderedList} from 'react-icons/ai'
import {BsFillGrid1X2Fill} from 'react-icons/bs'
import {NavLink} from 'react-router-dom'
import { AppContext } from '../../contexts/context'
import ProdCard from './ProdCard'
import ReactLoading from 'react-loading';
import Reducer from '../../reducers/main'
import Button from 'react-bootstrap/Button';

const InitialState = {
    color:'black',
    backgroundColor:'rgb(222, 220, 220)',
    view: {
        style1:{
            color:'white',
    backgroundColor:'black'
        },
        style2:{
            color:'black',
    backgroundColor:'rgb(222, 220, 220)'
        }
    }
}

function Main() {
    const {isLoading,filtered, PriceRangeFiltered, text} = useContext(AppContext);
    const [state, dispatch] = useReducer(Reducer,InitialState);
    const [display, setDisplay] = useState( 'none')
    const [view, setView] = useState({
        display:'grid'
    })
 // sorting according to price
 
 const all = async()=>{
   await filtered.sort((a,b)=>{
        return a.id - b.id
    })
    if (display === 'none') {
        setDisplay('block')
    }else{
        setDisplay('none')
    }
    console.log(filtered);
 }
 const ascending = async()=>{
    await filtered.sort((a,b)=>{
        return a.price - b.price
    })
    if (display === 'none') {
        setDisplay('block')
    }else{
        setDisplay('none')
    }
    console.log(filtered);
}
const descending = ()=>{
    filtered.sort((a,b)=>{
        return b.price - a.price
    })
    if (display === 'none') {
        setDisplay('block')
    }else{
        setDisplay('none')
    }
    console.log(filtered);
}
//search bar
const searchFiltered = filtered.filter((i)=>{ return i.title.toLowerCase().includes(text)})
console.log(searchFiltered);
// price range filter
const filteredFinal = searchFiltered.filter((i)=>{ return i.price <= PriceRangeFiltered})



/*useEffect(() => {
console.log(PriceRangeFiltered);
  
}, [PriceRangeFiltered])*/


    //veiw setting
    const handleStyle = ()=>{
        if (state.view.style1.color==='white' && state.view.style2.color==='black') {
            dispatch({type:'setStyle', payload:{
                style1:{
                    color:"black",
                    backgroundColor:"rgb(222, 220, 220)"
                },
                style2:{
                    color:"white",
                    backgroundColor:'black'
                }
            }})
        } else{
            dispatch({type:'setStyle', payload:{
                style1:{
                    color:"white",
                    backgroundColor:'black'
                },
                style2:{
                    color:"black",
                    backgroundColor:"rgb(222, 220, 220)"
                }
            }})
        }
        
    }
    const handleView = ()=>{
        if (state.view.style1.color !== 'white') {
            setView({
                display:"grid"
            })
        } else if (state.view.style2.color !== 'white') {
            setView({
                display:"block"
            })
        }
    }
    //toggle display
    const handleClick=()=>{
        if (display === 'none') {
            setDisplay('block')
        }else{
            setDisplay('none')
        }
        
    }
    
    
if (isLoading) {
   return <div className='main' style={{display: 'flex', justifyContent:'center', alignItems:"center"}}><ReactLoading type='balls' color='black' height={100} width={100}/></div>
} else{
    return (
        <div className="main">
            <div className="topbar">
                <div className='view__buttons'>
                <button className='list__view' onClick={() => {
          handleStyle();
          handleView();
        }} style={state.view.style2}>
                    <AiOutlineUnorderedList/>
                </button>
                <button className='grid__view' onClick={() => {
          handleStyle();
          handleView();
        }} style={state.view.style1}>
                <BsFillGrid1X2Fill/>
                </button>
                </div>
                <p style={{marginTop: '5px'}}>{filteredFinal.length} total results</p>
                <div className='PriceSort'>
                    <button className='price__sort' onClick={handleClick}>Price &#x25bc;</button>
                    <div className='dropdown' style={{display}}>
                        <p style={{cursor:'pointer'}} className='dropdown__item' onClick={all}>All</p>
                        <p style={{lineHeight:"2px", cursor:"pointer"}} className='dropdown__item' onClick={ascending}>Lowest</p>
                        <p style={{cursor:'pointer'}} className='dropdown__item' onClick={descending}>Highest</p>
                    </div>
                </div>
            </div>
            <div className="products" style={{display:view.display}}>
                
                {state.view.style2.color === 'white' ? filteredFinal.map((i)=>{return <div className='item__list' key={i.id}>
                    <div className='ProdImage'>
                        <img src={i.image} alt={i.title}/>
                    </div>
                    <div className='ProdInfo__listView'>
                        <p style={{fontWeight:'650', fontSize:'14px'}}>{i.title}</p>
                        <p style={{fontSize:'13px'}}>{i.description}</p>
                        <p style={{fontSize:'13px', fontWeight:'550',lineHeight:'2px'}}>${i.price}</p>
                        <NavLink key={i.id} to={`/product/${i.id}`}><Button variant="danger">Check out</Button></NavLink>
                    </div>
                </div>}):filteredFinal.map((i)=>{
                    return <div className='item__grid' key={i.id}> <ProdCard key={i.id} image={i.image} id={i.id} title={i.title} desc={i.description} price={i.price}/> </div>
                })}

            </div>
          </div>
      )
}
  
}

export default Main