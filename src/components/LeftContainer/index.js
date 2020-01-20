import React, { useState, useEffect } from 'react'
import { ContainerLeft, TopContent, DegreesInfo } from './styles'
import {connect} from 'react-redux'

import { WiCelsius, WiFahrenheit } from "react-icons/wi";

import cloud from '../../assets/clouds.webp'
import rain from '../../assets/rain.gif'
import sunnyDay from '../../assets/day.gif'
import storm from '../../assets/storm.gif'

import { hour, minutes, dayWeek, day, year, month } from '../../util/dateFormated'

import { api, api_key } from '../../services/api'

function LeftContainer({ weatherInfos, setWeatherInfos}) {
    const [image, setImage] = useState();
    const [city, setCity] = useState(weatherInfos.city);
    const [degrees, setDegrees] = useState('Fahrenheit');

    useEffect(() => {
        const weatherImages = {
            Rain: rain,
            Thunderstorm: storm,
            Clouds: cloud,
            Clear: sunnyDay,
        }
        weatherInfos.map(sky => setImage(weatherImages[sky.climate]))
    }, [weatherInfos])


    function handleCelsius() {
        setDegrees("Celsius")
    }
    function handleFahrenheit() {
        setDegrees("Fahrenheit")
    }

    function convertCelsius(temp) {
        const cell = Math.floor(temp - 273.15)
        return cell;
    }

    useEffect(() => {
        async function callApi() {
            const api_city = await api.get(`/weather?q=${city},br&&appid=${api_key}`)
            const response = api_city.data;
            const description = response.weather.map(sky => sky.main)
    setWeatherInfos({
                city: response.name,
                tempFahrenheit: response.main.temp,
                tempCelcius: convertCelsius(response.main.temp),
                tempMax: convertCelsius(response.main.temp_max),
                tempMin: convertCelsius(response.main.temp_min),
                humidity: response.main.humidity,
                clouds: response.clouds.all,
                sky: description
            })
        }
        callApi()
        console.log(weatherInfos)
        
    }, [city])

    return (
        <>
        {weatherInfos.map(info => (
            <ContainerLeft bgImg={image}>
            <TopContent>
                <h1>Weather Project</h1>
                <input onChange={e => setCity(e.target.value)} placeholder="Type city name"></input>
                <div>
                    <WiCelsius fontSize={40} onClick={handleCelsius} />
                    <WiFahrenheit fontSize={40} onClick={handleFahrenheit} />
                </div>
            </TopContent>
            <DegreesInfo>
                <h1>
                    {degrees == "Celsius" ? info.tempCelcius : info.tempFahrenheit}º<span>degrees {degrees}</span>
                </h1>
                <div>{hour}:{minutes} - {dayWeek} -  {month} {day}th , {year}</div>
            </DegreesInfo>
        </ContainerLeft>
        ))}
        </>
    )
}

export default connect(state => ({
    weatherInfos: state.weatherInfos
}))(LeftContainer)