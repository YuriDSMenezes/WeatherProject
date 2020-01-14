import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'



export default function Graphic({dates}) {
    const data = [
        { name: 'Monday', temperature: dates.tempCelcius },
        { name: 'Tuesday', temperature: dates.tempCelcius },
        { name: 'Wednesday', temperature: dates.tempCelcius },
        { name: 'thursday', temperature: dates.tempCelcius },
        { name: 'Friday', temperature: dates.tempCelcius },
        { name: 'Saturday', temperature: dates.tempCelcius },
        { name: 'Sunday', temperature: dates.tempCelcius },
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