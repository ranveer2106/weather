import React from 'react'

export default function Weekdays(props) {
    let { time, tempMax, tempMin, cloud, wind } = props;
    return (
        <>
            <div className="block text-center weekdays">
                <h1>{time}</h1>
                <h2> Temprature : {tempMin}-{tempMax} C </h2>
                <h2>Cloudy : {cloud}%</h2>
                <h2>windspeed: {wind}km/h</h2>
            </div>
        </>
    )
}
