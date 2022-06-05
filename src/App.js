import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Disalert from './components/Disalert';
import React, { useState } from 'react'

function App() {
  // usestate section
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const toggleMode = ()=>{
    if(mode === "dark"){
      setMode("light");
      document.body.style.backgroundColor = "white";
      setAlertmsg("Light Mode has been Enabled", "success");
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor = "#23282cf5";
      setAlertmsg("Dark Mode has been Enabled", "success");
    }
  }

  const setAlertmsg = (msg, type)=>{
    setAlert({
      msg : msg,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <>
      <Navbar title="Diljot's Website" first="Home" second="Contact Us" mode={mode} toggle={toggleMode}/>
      <Disalert alertd={alert}/>
      <Textarea setAlertmsg={setAlertmsg} heading="Enter text here:- " mode={mode}/>
    </>
  );
}

export default App;
