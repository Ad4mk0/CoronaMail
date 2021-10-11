import React, { useState, useEffect } from 'react';
import axios from 'axios';
import img1 from './3907960.jpg'
import img2 from './3676640.jpg';
import img3 from './5474.jpg'
import './compo.css'
import {useAppState} from './appState'

import CardColumns from 'react-bootstrap/CardColumns';
import Card from 'react-bootstrap/Card'

export type CoronaApiData = {
  deaths: number,
  recovered: number
  confirmed: number
}

export const Daticka: React.FC = () => {

  const [coroData, setCoroData] = useState<CoronaApiData>({
    confirmed: 0,
    deaths: 0,
    recovered: 0
  })

  const {selectedCountry, setSelectedCountry } = useAppState()


  

  useEffect(() => {
    console.log(selectedCountry)
    const corApi = 'https://coronavirus-tracker-api.herokuapp.com/v2/locations?country='
    axios.get(corApi.concat(selectedCountry), {headers: { 'Content-Type': 'application/json'}})
      .then((data) => {
      setCoroData(data.data.latest as CoronaApiData)
      console.log('hadi prdi')
      })},[selectedCountry]);


  
    return <MyComponent 
 
        //bazmekData = {bazmekData}
        selectedCountry = {selectedCountry}
        coroData = {coroData}

                        />

}


export const MyComponent: React.FC<{
  selectedCountry: string,
  coroData: CoronaApiData,

}> = ({selectedCountry,coroData}) => { 
  console.log(coroData)
  return <>
    <div className="haha">
    <CardColumns>
  <Card>
    <Card.Img variant="top" src={img1} />
    <Card.Body>
      <Card.Title>Total deaths</Card.Title>
      <Card.Text>
        Total deaths in {selectedCountry} are {coroData.deaths}.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={img2} />
    <Card.Body>
      <Card.Title>Inficated</Card.Title>
      <Card.Text>
        Number of total infications in {selectedCountry} are {coroData.confirmed}.
      </Card.Text>
    </Card.Body>
  </Card>

  <Card>
    <Card.Img variant="top" src={img3} />
    <Card.Body>
      <Card.Title>Retrieved</Card.Title>
      <Card.Text>
        Number of Retrieved in {selectedCountry} are {coroData.recovered}.
      </Card.Text>
    </Card.Body>
  </Card>

</CardColumns>
</div>

  </> ;
}
