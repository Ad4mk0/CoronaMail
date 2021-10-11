import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Navbaris } from './components/navbaris';
import './designs/About.css'

export const About: React.FC = () => {
    return (
        <>
            <Navbaris />
            <div className="mama">
                <Jumbotron>
                    <h1>Hello, world!</h1>
                    <p>
                        This site was created as a testing bed to try-out many posible customs of React.js.
                        It helped understand FE - BE aplications and DevOps will be deffinately took up in future. </p>

                </Jumbotron>
            </div>
        </>
    )
}