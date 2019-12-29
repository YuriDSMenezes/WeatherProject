import React from 'react'
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'



export default function Graphic({ dates }) {
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
        <LineChart width={550} height={250} data={data}
            margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} />
            <Line name="Temperatura" type="monotone" dataKey="temperatura" stroke="#8884d8" align="center" />
        </LineChart>
    )
}