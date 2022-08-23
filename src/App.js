import './App.css';
import City from './components/city';
// import Body from './components/body';
import Navbar from './components/navbar.js';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Example from './components/Navbar.js';
// import {
// useState,
// useEffect
// } from 'react';


function App() {


  return (
    <>


      {/* <City /> */}
      {/* <Body /> */}
      <Router>
        <Navbar />
        {/* <City /> */}
        {/* <Navbar title="RANVIR" /> */}
        {/* <Sidebars /> */}
        {/* <Footer /> */}
        <Routes>
          <Route exact path="/weather" element={<City />} />

        </Routes>
      </Router>
    </>
  );
}

export default App;
