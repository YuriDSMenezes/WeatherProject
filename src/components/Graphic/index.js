import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'



export default function Graphic({weatherInfos}) {
    const data = [
        { name: 'Mon', temperature: weatherInfos.tempCelcius },
        { name: 'Tue', temperature: weatherInfos.tempCelcius },
        { name: 'Wed', temperature: weatherInfos.tempCelcius },
        { name: 'thu', temperature: weatherInfos.tempCelcius },
        { name: 'Fri', temperature: weatherInfos.tempCelcius },
        { name: 'Sat', temperature: weatherInfos.tempCelcius },
        { name: 'Sun', temperature: weatherInfos.tempCelcius },
    ];


    return (
        <LineChart width={450} height={250} data={data}
            margin={{ top: 5, right: 0, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} align="left"/>
            <Line name="Temperature" type="monotone" dataKey="temperature" stroke="#8884d8" align="center" />
        </LineChart>
    )
}