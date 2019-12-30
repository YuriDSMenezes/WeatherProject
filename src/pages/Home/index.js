import React, { useEffect, useState } from "react";
import api from '../../services/api'

import ContainerLeft from '../../components/containerLeft'
import RightContent from '../../components/containerRigth'

import {
    Container,
    ContainerRight,
    PieceContainer,
} from "./styles";

export default function Home() {

    const [dates, setDates] = useState([])
    const [city, setCity] = useState()
    const [newCity, setNewCity] = useState("Brasília")

    function convertCelsius(temp) {
        const cell = Math.floor(temp - 273.15)
        return cell;
    }

    useEffect(() => {
        async function callApi() {
            const API_KEY = '0ccad757b8948d21b05011856bae6950'
            const api_call = await api.get(`/weather?q=${newCity},br&appid=${API_KEY}`)
            const response = api_call.data
            setDates({
                city: response.name,
                temp: convertCelsius(response.main.temp),
                tempMax: convertCelsius(response.main.temp_max),
                tempMin: convertCelsius(response.main.temp_min),
                humidity: response.main.humidity,
                clouds: response.clouds.all
            })
        }
        callApi()
    }, [newCity])

    return (
        <Container>
            <ContainerLeft setNewCity={setNewCity} city={city} dates={dates} setCity={setCity} />
            <ContainerRight>
                <RightContent dates={dates} />
            </ContainerRight>
        </Container>
    );
}
