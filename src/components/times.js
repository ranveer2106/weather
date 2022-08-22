import React from 'react'

export default function Times(props) {
    let { cloud, temp, wind, date } = props
    return (
        <>
            <div className="block text-center weekdays">
                <h1>{date}</h1>
                <h2>Temprature : {temp} C</h2>
                <h2>Cloud :{cloud}%</h2>
                <h2>windspeed: {wind}km/h</h2>
            </div>
        </>
    )
}
