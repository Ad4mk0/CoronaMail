import React from 'react';
import { Navbaris } from './components/navbaris';
import './designs/About.css'
import { Radio } from "antd";
import axios from "axios";
import { Formik } from 'formik';
import { Input  as  FormikInput} from "formik-antd";
import { message, Button, Space } from 'antd';

interface Values {
    email: string;
}

export const Unsub: React.FC = () => {
    function validateEmail(email:string) {
        if (!email) {
          message.error('Required')
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
          message.error('Invalid email address')
        }
        else {return "ok"}
      }
      
    function delUser(email: string) {
        axios.post("http://localhost:4000/api/unsubscribe", {
            email: email,

        }, { headers: { "Access-Control-Allow-Origin": "*" } }).then(function(response) {
            var resp = response.data;
            if (resp === "success"){
              //console.log("popici")
              message.success('You have successfully unsubscribed');
            } else if (resp.message === undefined){
            message.error("Email is not present in database")
            //message.error("Error"+ resp.message);
            }
        });}

    return (
        <>

            <Navbaris />

            <div className="zazrak1">

                <h1>Unsubscribe from email list</h1>
            </div>
            <Formik
                initialValues={{
                    email: '',
                }}
                onSubmit={() => undefined}>
                {({ values }) => (
                    <div className='zazrak'>
                        <FormikInput
                            className="site-input-right"
                            style={{
                                width: "60%",
                                minWidth: "150px",
                                textAlign: "center",
                            }}
                            placeholder="Your email"

                            id="email"
                            name="email"
                            type="email"
                        />
                        <Radio.Button onClick={() => {
                    //console.log(values.email)
                    //if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                     ///   message.error('Invalid email address')
                    ///} else {
                    if (validateEmail(values.email)=="ok"){
                    delUser(values.email)}
                  }} 
                        type="submit" value="default" style={{ minWidth: "50px" }}>
                            Unsubscribe
          </Radio.Button>
                    </div>

                )}

            </Formik>





        </>
    )

}
