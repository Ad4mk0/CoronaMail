import React from 'react';
import { Navbaris } from './components/navbaris';
import './designs/besafe.css';
import hcbgImage from "./images/4309130.jpg";



export const BeSafe: React.FC = () => {
    return (
        <>
            <Navbaris />


        <div className="application" style={{width:'auto',height:'100vh', backgroundColor:'#40c0b7', display:'flex', alignItems:'center'}}>
             
        <img src={hcbgImage} alt="Logo" style={{width:'100%', marginTop:'20%'}}/>
            
        </div>

        </>
    )
}