import React from 'react';

import LocationDetails from './Components/LocationDetails';
import LocationDetailPage from './pages/locationDetailPage';
import ReactDOM from 'react-dom';
import { Router, Route,  } from 'react-router'

import { useGetLocationaList } from './hooks/getLocationList';
import './App.css';

function App() {
  const tenant = "692627ef-fda8-4203-b108-e8e9f52ad410"
  const data = useGetLocationaList(tenant)

  const locationData = data?.locationList?.resources

  return (
   

    <div className="App">
        {/* <LocationDetails locationDetails={data.address} /> */}
        <LocationDetailPage locationaDetails= {locationData}/>
    </div>
  
  );
}

export default App;
