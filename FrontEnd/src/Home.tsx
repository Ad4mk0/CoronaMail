import React from 'react';
import {Daticka} from './components/infoBar'
import {Navbaris} from './components/navbaris';
import {SimpleAreaChart} from './components/graph'

export const Home: React.FC = () => {
    return(
    <div className="hm">
    <Navbaris/>
    <Daticka/>
    <SimpleAreaChart/>
    
    </div>
    )
}