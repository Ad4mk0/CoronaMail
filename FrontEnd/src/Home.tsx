import React from 'react';
import {Daticka} from './compo'
import {Navbaris} from './navbaris';

export const Home: React.FC = () => {
    return(
    <div className="hm">
    <Navbaris/>
    <Daticka/>
    </div>
    )
}