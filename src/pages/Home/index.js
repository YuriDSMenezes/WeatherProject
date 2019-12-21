import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
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

const data = [
    { name: 'Page A', pv: 2400, amt: 2400 },
    { name: 'Page B', pv: 1398, amt: 2210 },
    { name: 'Page C', pv: 9800, amt: 2290 },
    { name: 'Page D', pv: 3908, amt: 2000 },
    { name: 'Page E', pv: 4800, amt: 2181 },
    { name: 'Page F', pv: 3800, amt: 2500 },
    { name: 'Page G', pv: 4300, amt: 2100 },
];



export default function Home() {
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
                        <p>Brasília</p>
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
                <ResponsiveContainer>
                    <PieceContainer>
                        <LineChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                            <Line
                                type='monotone'
                                dataKey='pv'
                                stroke='#8884d8'
                                activeDot={{ r: 8 }}
                            />
                            <CartesianGrid strokeDasharray='3 3' />
                            <Tooltip />
                            <YAxis />
                            <XAxis dataKey='name' />
                            <Legend />
                        </LineChart>
                    </PieceContainer>
                </ResponsiveContainer>
            </ContainerRight>
        </Container>
    );
}
