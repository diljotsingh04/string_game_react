import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import React, { useState } from 'react'

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if(mode == "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#23282cf5";
    }
  }

  return (
    <>
      <Navbar title="Diljot's Website" first="Home" second="Contact Us" mode={mode} toggle={toggleMode}/>
      <Textarea heading="Enter text here:- "/>
    </>
  );
}

export default App;
