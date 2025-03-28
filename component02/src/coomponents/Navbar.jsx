import React, {useState} from 'react'
import {Link} from 'react-router-dom'


export default function Navbar(props) {
  return (
    <>
    <div >
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode === "dark" ? "black" : "white",
    color: props.mode === "dark" ? "white" : "black"
     }}>
  <div className="container-fluid">
    <Link className="navbar-brand" style={{ color: props.mode === "dark" ? "white" : "black"}} to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" style={{ color: props.mode === "dark" ? "white" : "black"}} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" style={{ color: props.mode === "dark" ? "white" : "black"}} to="/about">About</Link>
        </li>
      </ul>
      <div className="d-flex">
    <div className="bg-primary rounded mx-2" style={{height: "30px",width: "30px", cursor: "pointer"}} onClick={()=>{props.togglebg('primary')}}></div>
    <div className="bg-success rounded mx-2" style={{height: "30px",width: "30px", cursor: "pointer"}} onClick={()=>{props.togglebg('success')}}></div>
    <div className="bg-danger rounded mx-2" style={{height: "30px",width: "30px", cursor: "pointer"}} onClick={()=>{props.togglebg('danger')}}></div>
    <div className="bg-warning rounded mx-2" style={{height: "30px",width: "30px", cursor: "pointer"}} onClick={()=>{props.togglebg('warning')}}></div>
  </div>
      <div className="form-check form-switch">
  <input className="form-check-input" type="checkbox" onClick={()=>{props.togglemode('null')}} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">switch mode</label>
</div>
    </div>
  </div>
</nav>
</div>
    </>
   
  )
}
