import './App.css';
import City from './components/city';
import { useState, useEffect } from 'react';

function App() {
  const [lat, setlat] = useState("")
  const [lon, setlon] = useState("")

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setlat(position.coords.latitude);
      setlon(position.coords.longitude);
    });

  }, [])

  return (
    <>
      <City latitude={lat} longitude={lon} />
    </>
  );
}

export default App;
