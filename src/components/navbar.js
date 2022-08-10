import React from 'react'
import PropTypes from 'prop-types'
import "./component.css"
import { useState } from "react";
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  const [isActive, setActive] = useState("false");
  let print = () => {
    setActive(!isActive);
  }


  return (
    <nav className='navbar'>
      <div>
        <h1 className='fadeUp'><Link id='title' className='link' to="/">{props.title}</Link></h1>
      </div>
      <div id='options' className={`options ${isActive ? "actives" : "active"}`}>
        <ul className={`options ${isActive ? "actives" : "active"}`}>
          {/* <li><Link className='link' to="/">Home</Link</li> */}
          <li className='items fadeUp'><Link className='link navl' to="/">Home</Link></li>
          <li className='items fadeUp'><a className='link navl' target="_blank" rel="noreferrer" href={require('./Resume.pdf')}>Resume</a></li>
          {/* <li className='items fadeUp'><Link className='link navl' to="/">Resume</Link></li> */}
          <li className='items fadeUp'><Link className='link navl' to="/projects">Projects</Link></li>
          <li className='items fadeUp'><a className='link navl' href="mailto:ranveerbhatti2106@gmail.com">Contact</a></li>
          {/* <li className=' fadeUp'><button to="/" className='fadeUp' id='btn'>Resume</button></li> */}

        </ul>
      </div>
      <div className={`hamburger ${isActive ? "notActive" : "active"}`} onClick={print} >
        <span id='one' className={`bar ${isActive ? "notActive" : "active"}`}></span>
        <span id='two' className={`bar ${isActive ? "notActive" : "active"}`}></span>
        <span id='three' className={`bar ${isActive ? "notActive" : "active"}`}></span>
      </div>
    </nav >
  )
}

Navbar.propTypes = {
  title: PropTypes.string
}

// export default Navbar