import React, { useState } from 'react';

import { Container, Header, Content } from './styles'

import { MdMenu } from 'react-icons/md'

import { hour, minutes, dayWeek, day, year, month } from '../../util/formatedData'

import cloud from '../../assets/clouds.webp'
import rain from '../../assets/rain.gif'
import sunnyDay from '../../assets/day.gif'


export default function ContainerLeft({ city, setCity, dates, setNewCity, weather }) {

    const [image, setImage] = useState()

    function handleAddCity() {
        if (city === '') {
            return setNewCity("Brasília")
        }
        if (weather == "Rain") {
            setImage([rain, ""])
        }

        if(weather == "Clouds") {
            setImage([cloud, ""])
        }
        if(weather == "Clear") {
            setImage([sunnyDay, ""])

        }
        console.log(weather)
        return setNewCity(city)
    }


    return (
        <Container bgImg={image} >
            <Header>
                <div>Weather Project</div>
                <div>
                    <input type="text"  value={city} onChange={e => setCity(e.target.value)} placeholder="Type city name" />
                    <button type='button' onClick={handleAddCity}>Change</button>
                </div>
                <div>
                    <MdMenu size={40} />
                </div>
            </Header>
            <Content>
                <h1>
                    <span>{dates.temp}º</span>Graus Celsius
                    </h1>
                <div>{hour}:{minutes} - {dayWeek} , {day} de {month} de {year}</div>
            </Content>
        </Container>
    )
}