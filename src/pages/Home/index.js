import React, { useEffect, useState } from "react";
import api from '../../services/api'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'

import {
    Container,
    ContainerLeft,
    ContainerRight,
    Header,
    Content,
    PieceContainer,
} from "./styles";

import { MdMenu } from 'react-icons/md'
import { stringify } from "querystring";
import { parse } from "uri-js";
import { log } from "util";




export default function Home() {

    const [dates, setDates] = useState([])


    useEffect(() => {
        async function callApi() {
            const API_KEY = '0ccad757b8948d21b05011856bae6950'
            const api_call = await api.get(`/weather?q=Brasília,br&appid=${API_KEY}`)
            const response = api_call.data
            setDates({
                city:response.name,
                temp: response.main.temp,
                tempMax: response.main.temp_max,
                tempMin: response.main.temp_min,
                humidity: response.main.humidity,
                clouds: response.clouds.all
            })
            console.log(response)
        }
        callApi()
    }, [])

    const data = [
    { name: 'Segunda', temperatura: dates.temp },
    { name: 'Terça', temperatura: dates.temp },
    { name: 'Quarta', temperatura: dates.temp },
    { name: 'Quinta', temperatura: dates.temp },
    { name: 'Sexta', temperatura: dates.temp },
    { name: 'Sabado', temperatura: dates.temp },
    { name: 'Domingo', temperatura: dates.temp },
];


    return (
        <Container>
            <ContainerLeft>
                <Header>
                    <div>Weather Project</div>
                    <MdMenu size={40} />
                </Header>
                <Content>
                    <h1>
                        <span>{dates.temp}</span>Graus Celsos Portiolio
                    </h1>
                    <div>05:28 - Friday , 12 December 2019</div>
                </Content>
            </ContainerLeft>
            <ContainerRight>
                <PieceContainer>
                    <div>
                        <h3>City</h3>
                        <p>{dates.city}</p>
                        <button type='button'>Change</button>
                    </div>
                </PieceContainer>
                <PieceContainer>
                    <div>
                        <p>Wheather Details</p>
                    </div>
                    <div>
                        <ul>
                            <li>Temp Max </li>
                            <li>Temp Min</li>
                            <li>Cloudy</li>
                            <li>Humidity</li>
                        </ul>
                        <ul>
                            <li>{dates.tempMax}%</li>
                            <li>{dates.tempMin}%</li>
                            <li>{dates.clouds}%</li>
                            <li>{dates.humidity}%</li>
                        </ul>
                    </div>
                </PieceContainer>
                <LineChart width={600} height={250} data={data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" align="center" height={36} />
                    <Line name="Temperatura" type="monotone" dataKey="temperatura" stroke="#8884d8" align="center" />
                </LineChart>
            </ContainerRight>
        </Container>
    );
}
