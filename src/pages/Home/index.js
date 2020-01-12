import React, { useEffect, useState } from "react";
import api from '../../services/api'


import ContainerLeft from '../../components/containerLeft'
import ContainerRight from '../../components/containerRight'

import { Container, PieceContainer, } from "./styles";

import { SolarSystemLoading } from 'react-loadingg'

export default function Home() {
    const [dates, setDates] = useState()
    const [city, setCity] = useState('Brasília')
    const [newCity, setNewCity] = useState("Brasília")
    const [loading, setLoading] = useState(true);

    function convertCelsius(temp) {
        const cell = Math.floor(temp - 273.15)
        return cell;
    }

    useEffect(() => {
        async function callApi() {
            setLoading(true)
            const API_KEY = '0ccad757b8948d21b05011856bae6950'
            const api_call = await api.get(`/weather?q=${newCity},br&appid=${API_KEY}`)
            const response = api_call.data
            const description = response.weather.map(d => d.main)
            setDates({
                city: response.name,
                temp: convertCelsius(response.main.temp),
                tempMax: convertCelsius(response.main.temp_max),
                tempMin: convertCelsius(response.main.temp_min),
                humidity: response.main.humidity,
                clouds: response.clouds.all,
                main: description
            })
        }
        callApi()

        setTimeout(() => {
            setTimeout(setLoading(false))
        }, 1000);

    }, [newCity])

    return (
        <Container>
            {loading ? <SolarSystemLoading /> : (
                <>
                    <ContainerLeft setNewCity={setNewCity} newCity={newCity} city={city} dates={dates} setCity={setCity} weather={dates.main} />
                    <ContainerRight dates={dates} weather={dates.main} />
                </>
            )}
        </Container>
    );
}
