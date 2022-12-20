import React from "react";
import "../css/Services.css";
import { TbTruckDelivery } from "react-icons/tb";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
function Services() {
  return (
    <div style={{ display: "flex", alignItems:'center', justifyContent:'center',height:"300px"}}>
      <div className="services">
        <div className="services__icon">
          <TbTruckDelivery className="icon" />
        </div>
        <div className="services__info">
          <p>Super Fast and Free Delivery</p>
        </div>
      </div>

      <div className="services__middle">
        <div className="services" style={{display:'flex', flexDirection:'row', width:'95%'}}>
          <div className="services__icon"  style={{marginLeft: '10px'}}>
            <MdSecurity className="icon" />
          </div>
          <div className="services__info" style={{marginLeft:'15px'}}>
            <p style={{padding:'0 10px 0 0'}}>Super Fast and Free Delivery</p>
          </div>
        </div>

        <div className="services" style={{display:'flex', flexDirection:'row', width:'95%'}}>
          <div className="services__icon" style={{marginLeft: '10px'}}> 
            <GiReceiveMoney className="icon" />
          </div>
          <div className="services__info" style={{marginLeft:'15px'}}>
            <p style={{padding:'0 10px 0 0'}}>Super Fast and Free Delivery</p>
          </div>
        </div>
      </div>

      <div className="services">
        <div className="services__icon">
          <RiSecurePaymentLine className="icon" />
        </div>
        <div className="services__info">
          <p>Super Fast and Free Delivery</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
