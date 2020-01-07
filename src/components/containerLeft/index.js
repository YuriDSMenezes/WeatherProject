import React from 'react';
import {useState} from 'react'
import { Container, Header, Content, Rain } from './styles'
import { MdMenu } from 'react-icons/md'
import { getDate } from 'date-fns/esm';
import {hour, minutes, dayWeek, day, year, month} from '../../util/formatedData'


export default function ContainerLeft({ city, setCity, dates, setNewCity }) {

    const [weather, setWeather] = useState();

    const newWeather = dates.main;

    if(newWeather === "Clouds") {
        return console.log("ok")
    }

    function handleAddCity() {
        if (city === '') {
            return setNewCity("Brasília")
        }
        return setNewCity(city)
    }

    return (
        <Container dates={dates.main} >
            <Header>
                <div>Weather Project</div>
                <div>
                    <input value={city} onChange={e => setCity(e.target.value)} placeholder="Type city name" />
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