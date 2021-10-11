import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron'
import { Navbaris } from './components/navbaris';
import './designs/About.css'

export const Conditions: React.FC = () => {
    return (
        <>
            <Navbaris />
            <div className="mama">
                <Jumbotron>
                    <h2>Terms and conditions</h2>
                    <div>

                        <p>By subscribing to our newsletter you agree to receive email from us. The aim of our newletter service is to keep our customers and visitors updated about coronavirus pandemic. The subscription to our newsletter service is not mandatory.</p>

                        <h4>1. Frequency</h4>
                        <p>The frequency of the newletter issues will be at most once a day.</p>

                        <h4>2. Limited Liability</h4>
                        <p>We reserve the sole right to either modify or discontinue the newletter, at any time with or without notice to you. We are not responsible for truthfulness of data we provide. We will not be liable to you or any third party should we exercise such right. Any new features that augment or enhance the then-current services on this site shall also be subject to these Terms of Use.
We reserve the sole right to unsubscribe users / visitors from or newsletter service, without notice . We will do so with any subscriber we deem registered with fake data.</p>

                        <h4>3. Double opt-in</h4>
                        <p>We require all subscribers to confirm their email address upon registration. You will therefor receive a message with a link you'll have to click in order to confirm the email address and your will to subscribe.</p>

                        <h4>4. Privacy policy</h4>
                        <p>We will not communicate , spread , publish or otherwise give away your address. You'll be able to change your subscription settings or to delete it alltogether anytime.</p>
                    </div>
                </Jumbotron>
            </div>
        </>
    )
}