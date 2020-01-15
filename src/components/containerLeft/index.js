import React, { useState, useEffect } from 'react';

import { Container, Header, Content, ContainerDegrees } from './styles'

import { WiCelsius, WiFahrenheit } from "react-icons/wi";

import { hour, minutes, dayWeek, day, year, month } from '../../util/formatedData'

import cloud from '../../assets/clouds.webp'
import rain from '../../assets/rain.gif'
import sunnyDay from '../../assets/day.gif'
import storm from '../../assets/storm.gif'
import mist from '../../assets/mist.gif'


export default function ContainerLeft({ city, setCity, dates, setNewCity, newCity, weather }) {

    const [image, setImage] = useState()
    const [degrees, setDegrees] = useState('Celcius');

    function handleAddCity() {
        if (newCity === '') {
            return setNewCity("Brasília")
        }
        return setNewCity(city)
    }

    const weatherImages = {
        Rain: rain,
        Clouds: cloud,
        Clear:sunnyDay,
        Thunderstorm:storm,
        Mist: mist
    }

    useEffect(() => {
        setImage(weatherImages[weather])
    }, [newCity])



    function handleCelsius() {
        setDegrees("Celsius")
    }
    function handleFahrenheit() {
        setDegrees("Fahrenheit")
    }
    console.log(degrees)
    return (
        <Container bgImg={image} >
            <Header>
                <div>Weather Project</div>
                <div>
                    <input type="text" value={city} onChange={e => setCity(e.target.value)} placeholder="Type city name" />
                    <button type='button' onClick={handleAddCity}>Change</button>
                </div>
                <ContainerDegrees>
                    <WiCelsius size={50} onClick={handleCelsius} />
                    <WiFahrenheit size={50} onClick={handleFahrenheit} />
                </ContainerDegrees>
            </Header>
            <Content>
                <h1>
                    <span>{
                        degrees == "Celsius" ? dates.tempCelcius : dates.tempFahrenheit
                    }º</span>degrees {degrees}
                </h1>
                <div>{hour}:{minutes} - {dayWeek} -  {month} {day}th , {year}</div>
            </Content>
        </Container>
    )
}