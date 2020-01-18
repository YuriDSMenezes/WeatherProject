import React, { useState, useEffect } from 'react'
import { ContainerLeft, ImageBackground, TopContent, DegreesInfo } from './styles'

import { WiCelsius, WiFahrenheit } from "react-icons/wi";
import cloud from '../../assets/clouds.webp'
import rain from '../../assets/rain.gif'
import sunnyDay from '../../assets/day.gif'
import storm from '../../assets/storm.gif'
import { MainContent } from '../../pages/Home/styles';

import { hour, minutes, dayWeek, day, year, month } from '../../util/dateFormated'


export default function LeftContainer({ weatherInfos }) {
    const [image, setImage] = useState();
    const [city, setCity] = useState(weatherInfos.city);
    const [degrees, setDegrees] = useState('Fahrenheit');

    const weatherImages = {
        Rain: rain,
        Thunderstorm: storm,
        Clouds: cloud,
        Clear: sunnyDay,
    }

    function handleCity() {
        setCity(city)
    }

    useEffect(() => {
        setImage(weatherImages[weatherInfos.climate])
    }, [weatherInfos])


    function handleCelsius() {
        setDegrees("Celsius")
    }
    function handleFahrenheit() {
        setDegrees("Fahrenheit")
    }


    return (
        <ContainerLeft bgImg={image}>
            <TopContent>
                <h1>Weather Project</h1>
                <input onChange={e => setCity(e.target.value)} placeholder="Type city name"></input>
                <div>
                <button onClick={handleCity}>Change</button>
                </div>
                <div>
                    <WiCelsius fontSize={50} onClick={handleCelsius} />
                    <WiFahrenheit fontSize={50} onClick={handleFahrenheit} />
                </div>
            </TopContent>
            <DegreesInfo>
                <h1>
                    {degrees == "Celsius" ? weatherInfos.tempCelcius : weatherInfos.tempFahrenheit}º<span>degrees {degrees}</span>
                </h1>
                <div>{hour}:{minutes} - {dayWeek} -  {month} {day}th , {year}</div>
            </DegreesInfo>
        </ContainerLeft>
    )
}