import React, { useState, useEffect} from "react";
import axios from 'axios';
import ApodImg from './components/ApodImg'
import "./App.css";

function App() {
  const [apodData, setApodData] = useState();

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=CX9vAWz0uGhFiTRLLoqDSBPXmqVp5Pe26ghJyj75')
      .then(res => {
        console.log(res);
        setApodData(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      { apodData && <ApodImg data={apodData}/> }
    </div>
  );
}

export default App;
