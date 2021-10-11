import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Navbaris } from './navbaris';
import './About.css'
import { Select, Input, Radio, Spin } from "antd";

export const Unsub: React.FC = () => {
    return (
        <>
            <Navbaris />
            <div className="zazrak1">

                <h1>Unsubscribe from email list</h1>
                </div>
                <div className='zazrak'>
                <Input
                    className="site-input-right"
                    style={{
                        width: "60%",
                        minWidth: "150px",
                        textAlign: "center",
                    }}
                    placeholder="Your email"
                />
                <Radio.Button value="default" style={{ minWidth: "50px" }}>
                    Unsubscribe
          </Radio.Button>
          
        

        </div>
        </>
    )
}