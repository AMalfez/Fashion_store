import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../../css/productComp/Card.css'
import {NavLink} from 'react-router-dom'

function ProdCard(props) {
  return (
    <Card style={{paddingTop:'5px',width: '90%', height:'97%',display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center' }}>
      <Card.Img variant="top" src={props.image}  style={{width:'50%',display:'flex', justifyContent:'center',alignItems:'center'}}/>
      <Card.Body style={{display:'flex', flexDirection:'column',justifyContent:'center', alignItems:'center'}}>
        <Card.Title style={{fontSize:'10px'}}>{props.title}<br/>${props.price}</Card.Title>
        <Card.Text style={{display:'none'}}>
          {props.desc}
        </Card.Text>
        <NavLink key={props.id} to={`/product/${props.id}`}><Button variant="danger">Check out</Button></NavLink>
      </Card.Body>
    </Card>
  )
}

export default ProdCard