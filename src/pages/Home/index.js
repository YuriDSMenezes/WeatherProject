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


const data = [
    { name: 'Segunda', temperatura: 25 },
    { name: 'Terça', temperatura: 22 },
    { name: 'Quarta', temperatura: 18 },
    { name: 'Quinta', temperatura: 23 },
    { name: 'Sexta', temperatura: 19 },
    { name: 'Sabado', temperatura: 28 },
    { name: 'Domingo', temperatura: 20 },
];

export default function Home() {

    const [dates, setDates] = useState([])


    useEffect(() => {
        async function callApi() {
            const API_KEY = '0ccad757b8948d21b05011856bae6950'
            const response = await api.get(`/weather?q=Brasília,br&appid=${API_KEY}`)
            setDates([...dates, response.data])
        }
        callApi()
    }, [])

    return (
        <Container>
            <ContainerLeft>
                <Header>
                    <div>Weather Project</div>
                    <MdMenu size={40} />
                </Header>
                <Content>
                    <h1>
                        <span>14º</span>Graus Celsos Portiolio
                    </h1>
                    <div>05:28 - Friday , 12 December 2019</div>
                </Content>
            </ContainerLeft>
            <ContainerRight>
                <PieceContainer>
                    <div>
                        <h3>City</h3>
                        <p>{dates.name}</p>
                        <button type='button'>Change</button>
                    </div>
                </PieceContainer>
                <PieceContainer>
                    <div>
                        <p>Wheather Details</p>
                    </div>
                    <div>
                        <ul>
                            <li>Wheather </li>
                            <li>Cloudy</li>
                            <li>Precipitation</li>
                            <li>Humidity</li>
                        </ul>
                        <ul>
                            <li>90%</li>
                            <li>90%</li>
                            <li>90%</li>
                            <li>90%</li>
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
