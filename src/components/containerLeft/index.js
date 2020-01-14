import React, { useState, useEffect } from 'react';

import { Container, Header, Content, ContainerDegrees } from './styles'

import { WiCelsius, WiFahrenheit } from "react-icons/wi";

import { hour, minutes, dayWeek, day, year, month } from '../../util/formatedData'

import cloud from '../../assets/clouds.webp'
import rain from '../../assets/rain.gif'
import sunnyDay from '../../assets/day.gif'
import storm from '../../assets/storm.gif'


export default function ContainerLeft({ city, setCity, dates, setNewCity, newCity, weather }) {

    const [image, setImage] = useState()
    const [degrees, setDegrees] = useState('Celcius');

    function handleAddCity() {
        if (newCity === '') {
            return setNewCity("Brasília")
        }
        return setNewCity(city)
    }

    useEffect(() => {
        if (weather == "Rain") {
            setImage(rain)
        }
        if (weather == "Clouds") {
            setImage(cloud)
        }
        if (weather == "Clear") {
            setImage(sunnyDay)
        }
        if (weather == "Thunderstorm") {
            setImage(storm)
        }
    }, [newCity])



    function handleCelsius() {
        setDegrees("Celsius")
    }
    function handleFahrenheit() {
        setDegrees("Fahrenheit")
    }

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