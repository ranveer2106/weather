// import { json } from 'express';
import React from 'react'
// import {
// useEffect,
// useState
// } from "react";
import logo from "./logo.png"

export default function Navbar() {
    // const [x, setx] = useState()
    // let a = 0
    // useEffect(() => {
    //     return () => {
    //         const url = "https://api.open-meteo.com/v1/forecast?latitude=28.6353&longitude=77.2250&hourly=temperature_2m,rain,windspeed_10m";
    //         const fetchData = async () => {
    //             try {
    //                 const response = await fetch(url);
    //                 const json = await response.json();
    //                 const ans = JSON.parse(JSON.stringify(json));
    //                 // setx(JSON.parse(JSON.stringify(json)))
    //                 // console.log((`${JSON.parse(json)["hourly_units"]["time"]} he`));
    //                 console.log(ans["latitude"])
    //                 console.log(ans.longitude)
    //                 setx(ans.hourly.time[0])

    //             } catch (error) {
    //                 console.log("error", error);
    //             }
    //         };
    //         fetchData();
    //     }
    // })

    return (
        <>
            <div className='flex navbar justify-around py-2'>
                <div className="logo">
                    <img src={logo} alt="hi" />
                </div>
                <div className="options">
                    <ul className='flex'>
                        <li className='px-1 mx-2'><a href="/">home</a></li>
                    </ul>
                </div>


            </div>
        </>
    )
}
