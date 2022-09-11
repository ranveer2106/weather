import React from 'react'
import "./components.css"
import Times from './times'
import { useState, useEffect } from 'react';
import Weekdays from './weekdays';

function Body(props) {
    const [temp, settemp] = useState()
    const [weekDate, setweekDate] = useState([])
    const [weekMaxTemp, setweekMaxTemp] = useState([])
    const [weekMinTemp, setweekMinTemp] = useState([])
    const [cloud, setcloud] = useState([])
    const [wind, setwind] = useState([])
    const [Temprature, setTemprature] = useState([])
    const [skip, setskip] = useState(true)
    const [sunRise, setsunRise] = useState("")
    const [sunSet, setsunSet] = useState("")
    const [cws, setcws] = useState("")

    let timo = [0, 1, 2, 3]
    useEffect(() => {
        if (skip) {
            setskip(false)
        }
        else {
            const fetchData = async () => {
                const url = `https://api.open-meteo.com/v1/forecast?${props.coOrdinate}&hourly=temperature_2m,relativehumidity_2m,rain,cloudcover,windspeed_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,rain_sum,windspeed_10m_max&current_weather=true&timezone=auto`
                const response = await fetch(url);
                const json = await response.json();
                const ans = JSON.parse(JSON.stringify(json));
                settemp(ans.current_weather.temperature)
                setweekDate(ans.daily.time)
                setweekMaxTemp(ans.daily.temperature_2m_max)
                setweekMinTemp(ans.daily.temperature_2m_min)
                setcloud(ans.hourly.cloudcover)
                setwind(ans.hourly.windspeed_10m)
                setTemprature(ans.hourly.temperature_2m)
                setsunRise(ans.daily.sunrise)
                setsunSet(ans.daily.sunset)
                setcws(ans.current_weather.windspeed)
            };

            fetchData();
        }



    }, [props.coOrdinate, skip])


    return (
        <>
            <div className='body flex justify-between flex-col'>
                <div className='flex justify-between city'>
                    <div className='container text-left'>
                        <h1 id='heading'>{temp}&deg;C</h1>
                    </div>
                    <div className='flex container justify-between'>
                        <div>
                            <h1 className='details'>Sun Rise : {sunRise[0]}</h1>
                        </div>
                        <div>
                            <h1 className='details'>Sun Set : {sunSet[0]}</h1>
                        </div>
                        <div>
                            <h1 className='details'>Wind Speed : {cws}Km/h</h1>
                        </div>
                    </div>
                </div>
                <h1 className='forecast'>Today's ForeCast</h1>
                <div className='timing flex flex-wrap'>
                    {timo.map((element) => {
                        let dayTime = ["Morning", "Afternoon", "Evening", "Night"]
                        return <Times key={element} time={dayTime[element]} cloud={cloud[1 + (element * 6)]} temp={Temprature[1 + (element * 6)]} wind={wind[1 + (element * 6)]} date={weekDate[0]} />
                    })}
                </div>
                <h1 className='forecast'>Weekly ForeCast</h1>
                <div className="week flex my-8 flex-wrap">
                    {weekDate.map((element) => {
                        let inde = weekDate.findIndex((i) => i === element)
                        return <Weekdays key={element} sunrise={sunRise[inde]} sunset={sunSet[inde]} time={element} tempMax={weekMaxTemp[inde]} tempMin={weekMinTemp[inde]} cloud={cloud[13 + inde * 24]} wind={wind[13 + inde * 24]} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Body

