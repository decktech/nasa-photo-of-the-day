import React, { useState, useEffect} from "react";
import axios from 'axios';
import ApodImg from './components/ApodImg'
import "./App.css";
import { Dropdown, Option } from "./components/Dropdown";

function App() {
  const [apodData, setApodData] = useState();
  const [optionValue, setOptionValue] = useState("");
  const handleSelect = (e) => {
    console.log(e.target.value);
    setOptionValue(e.target.value);
  };

  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=CX9vAWz0uGhFiTRLLoqDSBPXmqVp5Pe26ghJyj75')
      .then(res => {
        // console.log(res);
        setApodData(res.data);
      })
      .catch(err => console.error(err))
  }, [])

  return (
    <div className="App">
      <h1>Select Date</h1>
      <Dropdown
        formLabel="Choose a service"
        buttonText="Send form"
        onChange={handleSelect}
        action="https://jsonplaceholder.typicode.com/posts"
      >
        <Option selected value="Click to see options" />
        <Option value="Option 1" />
        <Option value="Option 2" />
        <Option value="Option 3" />
      </Dropdown>
      <p>You selected {optionValue} </p>
      { apodData && <ApodImg data={apodData}/> }
    </div>
  );
}

export default App;
