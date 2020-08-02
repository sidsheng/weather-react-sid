import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Row, Col, Card } from 'react-bootstrap';
import Context from "../Context"
import WeatherSearch from './WeatherSearch'
import Weather from './Weather'

const API_KEY = "<api_key>"

export default function Main() {
    const [weather, setWeather] = useState(null)
    const [city, setCity] = useState(null) 
    const [error, setError] = useState(null)

    useEffect(() => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=sydney&appid=${API_KEY}&units=metric`
        if (weather === null)
        {
            axios.get(url).then((res) => {
                setWeather(res.data.main)
                setCity(res.data.name)
            })
        }
    });

    const api_call = async e => {
        e.preventDefault()
        const location = e.target.elements.city.value
        if (!location) {
            return setError("Please enter the name of the city"), setWeather(null)
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`
        const request = axios.get(url)
        const response = await request
        setError(null)
        setWeather(response.data.main)
        setCity(response.data.name)
    }

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Text>
                    <Context.Provider value={{api_call, weather, city}}>
                        <Col><WeatherSearch /></Col>
                        {weather !== null && <Col><Weather /></Col>}
                    </Context.Provider>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
