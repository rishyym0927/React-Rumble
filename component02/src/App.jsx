import './App.css';
import Navbar from './coomponents/Navbar.jsx';
import TextForms from './coomponents/TexForms.jsx';
import About from './coomponents/About.jsx';
import React, {useState} from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-primary')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-light')
  }
  let togglemode =()=>{
    if(mode==="light"){
      setmode("dark");
      document.body.style.backgroundColor = "dimgrey";
      document.body.style.color = "white";
    }
    else{
      setmode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }
  let togglebg = (cls)=>{
    removeBodyClasses()
    document.body.classList.add('bg-'+cls)
  }
  return (
    <Router>
    <div >
  <Navbar title="textutils" mode={mode} togglemode={togglemode} togglebg={togglebg}/>
  <div className="container my-3">
  <Routes>
          <Route path="/about" element={<About />}>
          </Route>
          <Route path="/" element={<TextForms title="Enter the text" />}>
          </Route>
        </Routes>
  </div>
  </div>
  </Router>
  );
}

export default App;
