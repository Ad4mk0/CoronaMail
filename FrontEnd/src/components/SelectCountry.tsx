import React from "react";
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import "../designs/selectcountry.css";
import { Daticka } from "./infoBar";
import { Select, Radio, Spin, Input } from "antd";
import { useAppState } from "./appState";
import { Formik } from 'formik';
import { Input as FormikInput } from "formik-antd";
import { message, Button, Space } from 'antd';


interface Values {
  email: string;
  country: string;
}

type CoronaVirusApiResponse = { locations: [{ country: string }] };

export const Appy = () => {
  //const [counter, setCounter] = useState(0);
  const [coroPlaces, setCoroPlaces] = useState<CoronaVirusApiResponse>();
  useEffect(() => {
    const apiUrl = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";
    axios
      .get(apiUrl, { headers: { 'Content-Type': 'application/json', "Access-Control-Allow-Origin": "*" } })
      .then((res: { data: CoronaVirusApiResponse }) => setCoroPlaces(res.data));
  }, []);
  return (
    <Spin spinning={!coroPlaces} >
      {coroPlaces &&
        <SelectCountry coroPlaces={coroPlaces} />
      }
    </Spin>
  );
};

export const SelectCountry: React.FC<{
  coroPlaces: CoronaVirusApiResponse;
}> = ({ coroPlaces }) => {
  const { selectedCountry, setSelectedCountry } = useAppState();

  var JSONObject = coroPlaces;
  const v = JSONObject.locations;
  var arrayLength = v ? v.length : "null";

  const mySet1: Set<string> = new Set();
  for (var i = 0; i < arrayLength; i++) {
    mySet1.add(v[i].country);
  }

  var countries = Array.from(mySet1);
  //console.log(countries);

  const { Option } = Select;

  function handleChange(value: string) {
    setSelectedCountry(value)
  };

  function addUser(email: string, country: string) {
    axios.post("http://localhost:4000/api/create", {
      email: email,
      country: country // This is the body part
    }, { headers: { "Access-Control-Allow-Origin": "*" } }).then(function(response) {
    var resp = response.data;
    if (resp === "success"){
      //console.log("popici")
      message.success('You have successfully subscribed');
    } else if (resp.message === undefined){
      message.error("Email already in use");
      //message.error("Error"+ resp.message);
      }
  });}






  return (

    <>
      <div className="page">
      <div className="container h-100 d-flex mt-sm-4 justify-content-center">
        <h2>{selectedCountry}</h2>
      </div>
      <Formik
        initialValues={{
          email: '',
          country: selectedCountry,
          picked: '',
        }}
        onSubmit={() => undefined}>
        {({ values }) => (
          <div className="inputgrup">
            <Input.Group compact>
              <Select
                value={selectedCountry}
                style={{ width: "20%", minWidth: "150px" }}
                onChange={handleChange}
              >
                {countries.map((country) => (
                  <Option value={country} key={country}>
                    {country}
                  </Option>
                ))}
              </Select>
              <FormikInput
                className="site-input-right"
                style={{
                  width: "60%",
                  minWidth: "150px",
                  textAlign: "center",
                }}
                placeholder="Recipient's email"
                id="email" name="email"
                type="email"
              />
              <div className='zrobim'>
                <Radio.Button onClick={() => {
                  if (values.picked===''){
                    message.error('You must agree to Terms and Conditions')
                  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                    message.error('Invalid email address')
                  } else {
                    addUser(values.email, selectedCountry)
                  }

                }} type="submit" value="default" style={{ minWidth: "50px" }}>
                  Subscribe
                 </Radio.Button>

              </div>
              <div className="radiobut">


                <Radio onChange={() => {
                  values.picked = "Agree"
                  //console.log(values.picked)
                }} type="radio" name="picked" value="Agree">Agree to <Link to="/conditions" style={{ color: "blue" }}>Terms and conditions</Link></Radio>

              </div>

            </Input.Group>

          </div>
        )}

      </Formik>
      <div className="mojMalyPesTobi">
        <Daticka />

      </div>
      </div>

    </>
  );
};
