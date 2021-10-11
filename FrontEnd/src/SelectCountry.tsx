import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import "./selectcountry.css";
import { Daticka } from "./compo";
import { Select, Input, Radio, Spin, Popover } from "antd";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import { useAppState } from "./appState";
import { Container } from "react-bootstrap";


type CoronaVirusApiResponse = { locations: [{ country: string }] };

export const Appy = () => {
  const [counter, setCounter] = useState(0);
  const [coroPlaces, setCoroPlaces] = useState<CoronaVirusApiResponse>();
  useEffect(() => {
    const apiUrl = "https://coronavirus-tracker-api.herokuapp.com/v2/locations";
    axios
      .get(apiUrl)
      .then((res: { data: CoronaVirusApiResponse }) => setCoroPlaces(res.data));
  }, [counter]);
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
    setSelectedCountry(value);
  }
  const content = (
    <div>
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
      <Radio.Button value="default" style={{ minWidth: "25px" }}>Accept</Radio.Button>
    </div>
  );


  return (
    <>
      <div className="container h-100 d-flex mt-sm-4 justify-content-center">
        <h2>{selectedCountry}</h2>
      </div>

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
          <Input
            className="site-input-right"
            style={{
              width: "60%",
              minWidth: "150px",
              textAlign: "center",
            }}
            placeholder="Recipient's email"
          />
          <Popover placement="bottomRight" content={content} title={<h3>Terms and conditions</h3>} trigger="hover">
            <div className='zrobim'>
            <Radio.Button value="default" style={{ minWidth: "50px" }}>
              Subscribe
          </Radio.Button>
          </div>
          </Popover>
        </Input.Group>
      </div>
      <div className="mojMalyPesTobi">
        <Daticka />
      </div>
    </>
  );
};
