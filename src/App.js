import './App.css';
import logo from './UMS-Logo.png';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';

import { BrowserRouter, Route, Routes } from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#2E3235';
      showAlert("Dark Mode Activated!", "success");
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode Activated!", "success");
    }
  }


  return (
    <>
      <BrowserRouter>
      <Navbar title="UMS.TextUtlity" mode={mode} toggleMode={toggleMode} logo={logo}/>
      <Alert alert={alert} />
        <Routes>
          < Route path="/"
            element={<TextForm showAlert={showAlert} heading="Enter the text below to analyze" mode={mode} />} />
          <Route path="/about" element={<About mode={mode} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
