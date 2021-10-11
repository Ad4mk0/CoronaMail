import './App.css';

import { Route, BrowserRouter as Router } from 'react-router-dom'
import React, { useEffect } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

import { About } from './About';
import { Home } from './Home'
import { BeSafe } from './BeSafe';
import { Select } from './mojko';
import { Unsub } from './Unsub'

import {useAppState} from './appState'
import { Spin } from 'antd';




const App: React.FC = () => {
  const {selectedCountry, setSelectedCountry } = useAppState()
  useEffect(() => {
    const apiUrl = 'https://extreme-ip-lookup.com/json/';
    axios.get(apiUrl)
      .then((res) => 
      {
        setSelectedCountry(res.data.country)
        console.log('hello from Kubernetes !!')
      })},[setSelectedCountry]);
      console.log(selectedCountry)
  return (
      <Spin spinning={selectedCountry===undefined}>
      <Router>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />
        <Route path='/besafe' component={BeSafe} />
        <Route path='/select' component={Select} />
        <Route path='/unsubscribe' component={Unsub} />
      </Router>
      </Spin>
    



  );
}


export default App;
