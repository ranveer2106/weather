import React from 'react'
import Body from './body'
import { useState, useEffect } from 'react';


export default function City(props) {
    const [cordinate, setcordinate] = useState("")
    const latu = props.latitude
    const longu = props.longitude
    const [city, setcity] = useState("New Delhi")

    useEffect(() => {
        let location = (x) => {
            if (x === "Your Location") {
                let latitude = latu
                let longitude = longu
                setcordinate(`latitude=${latitude}&longitude=${longitude}`)
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
        }
        location(city)
    })



    let change = () => {
        console.log()
        let data = document.getElementById("datalist");
        let x = data.options[data.selectedIndex]
        let head = document.getElementById("heading")
        head.textContent = x.text
        setcity(x.text)
    }
    let current = () => {
        let head = document.getElementById("heading")
        let data = document.getElementById("datalist");
        data.value = "Your Location"
        head.textContent = "Your Location"
        setcity("Your Location")
        setcordinate(`latitude=${latu}&longitude=${longu}`)
    }

    return (
        <div>
            <h1 id='heading'>{city}</h1>
            <button onClick={current}>Get location Weather</button>
            <select id='datalist' className='px-3 rounded-md' onChange={change} defaultValue={city} >
                <option value="New Delhi">New Delhi</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Your Location">Your Location</option>
            </select>
            <Body coOrdinate={cordinate} />

        </div>
    )
}
