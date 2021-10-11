import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Navbaris } from './navbaris';
import './About.css'

export const About: React.FC = () => {
    return (
        <>
            <Navbaris />
            <div className="mama">
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
  </p>

            </Jumbotron>
            </div>
        </>
    )
}