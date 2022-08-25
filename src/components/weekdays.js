import React from 'react'

export default function Weekdays(props) {
    let { time, tempMax, tempMin, cloud, wind, sunrise, sunset } = props;
    return (
        <>
            <div className="block text-center weekdays">
                <h1>{time}</h1>
                <h2> {tempMin}&deg;C-{tempMax}&deg;C </h2>
                <h2>Cloudy : {cloud}%</h2>
                <h2>windspeed:{wind}km/h</h2>
                <h2>Sun Rise:{sunrise}</h2>
                <h2>Sun Set:{sunset}</h2>
            </div>
        </>
    )
}
