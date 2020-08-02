import React, { useContext } from 'react'
import Context from "../Context"

export default function Weather() {
    const {weather, city} = useContext(Context)
    const {temp, feels_like, temp_min, temp_max } = weather

    return (
        <div>
            Temp: {temp}
            <br></br>Feels like: {feels_like}
            <br></br>Max: {temp_max}
            <br></br>Min: {temp_min}
        </div>
    )
}
