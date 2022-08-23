import React from 'react'
import Body from './body'
import { useState, useEffect } from 'react';


export default function City(props) {
    const [cordinate, setcordinate] = useState("")
    const [latitude1, setlatitude] = useState()
    const [longitude1, setlongitude] = useState()



    // function showPosition(position) {
    //     setcordinate(`latitude=${position.coords.latitude}&longitude=${position.coords.longitude}`)

    // }

    let location = (x) => {
        // let latitude = 0
        // let longitude = 0

        if (x === "Your Location") {
            setcordinate(`latitude=${latitude1}&longitude=${longitude1}`)
        }
        else if (x === "New Delhi") {
            let latitude = 28.6353
            let longitude = 77.2250
            setcordinate(`latitude=${latitude}&longitude=${longitude}`)
        }
        else if (x === "Mumbai") {
            let latitude = 19.0760
            let longitude = 72.8777
            setcordinate(`latitude=${latitude}&longitude=${longitude}`)

        }
        else if (x === "Kolkata") {
            let latitude = 22.5726
            let longitude = 88.3639
            setcordinate(`latitude=${latitude}&longitude=${longitude}`)

        }
        // return `latitude=${latitude}&longitude=${longitude}`

    }
    useEffect(() => {
        // console.log(props.l)
        // console.log("hello2")
        // console.log("Latitude is :", position.coords.latitude);
        navigator.geolocation.watchPosition(function (position) {
            setlatitude(position.coords.latitude)
            setlongitude(position.coords.longitude)
            console.log("Longitude is :", position.coords.longitude);
            console.log("Longitude is :", position.coords.latitude);

            // show()
        });
        // let lat =
        if (!localStorage.city) {
            localStorage.setItem("city", "New Delhi")
            document.getElementById("heading").textContent = localStorage.city
            location(localStorage.city)
            // console.log(props.l, "11")
            // console.log(c, "sfhhksjd")
            // console.log("not emty")
        }
        else {
            document.getElementById("heading").textContent = localStorage.city
            location(localStorage.city)
            // console.log(props.l, "11")
        }
    });

    let change = () => {
        let data = document.getElementById("datalist");
        let x = data.options[data.selectedIndex]
        // console.log(x.text)
        // console.log(x.value)
        let head = document.getElementById("heading")
        head.textContent = x.text
        setcity(x.text)
        localStorage.removeItem(`city`, `${x.text}`);
        localStorage.setItem(`city`, `${x.text}`);
        console.log(new Date(), "date")
    }
    // let current = () => {
    //     let head = document.getElementById("heading")
    //     head.textContent = "Your Location"
    //     localStorage.removeItem("city")
    //     localStorage.setItem(`city`, `Your Location`)
    //     location(localStorage.city)
    // }


    const [city, setcity] = useState(localStorage.city)
    return (
        <div>
            <h1 id='heading'>{city}</h1>
            {/* <button onClick={current}>Get location Weather</button> */}
            <select id='datalist' className='px-3 rounded-md' onChange={change} defaultValue={localStorage.city} >
                <option value="New Delhi">New Delhi</option>
                {/* <option value="Your Location">Your Location</option> */}
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
            </select>
            <Body cor={cordinate} />

        </div>
    )
}
