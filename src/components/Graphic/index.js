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
        { name: 'Monday', temperature: weatherInfos.tempCelcius },
        { name: 'Tuesday', temperature: weatherInfos.tempCelcius },
        { name: 'Wednesday', temperature: weatherInfos.tempCelcius },
        { name: 'thursday', temperature: weatherInfos.tempCelcius },
        { name: 'Friday', temperature: weatherInfos.tempCelcius },
        { name: 'Saturday', temperature: weatherInfos.tempCelcius },
        { name: 'Sunday', temperature: weatherInfos.tempCelcius },
    ];


    return (
        <LineChart width={600} height={250} data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line name="Temperature" type="monotone" dataKey="temperature" stroke="#8884d8" align="center" />
        </LineChart>
    )
}