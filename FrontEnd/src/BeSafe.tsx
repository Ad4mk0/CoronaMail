import React from 'react';
import { Navbaris } from './navbaris';
import './besafe.css'
import hcbgImage from "./4309130.jpg";
import SizeContext from 'antd/lib/avatar/SizeContext';


export const BeSafe: React.FC = () => {
    return (
        <>
            <Navbaris />
            {/* <p>pijem pivo a honim si kokot</p> */}
            <div
                className="bg_image"
                style={{
                    backgroundImage: `url(${hcbgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: 'center',
                    WebkitBackgroundSize:'100%',
                    minWidth:'90wh',
                    maxWidth: 'auto',
                    minHeight: '95vh',
                    maxHeight: 'auto',
                    overflow:'hidden',
                    backgroundRepeat: 'no-repeat',
                    
                }}>
                
      </div>

        </>
    )
}