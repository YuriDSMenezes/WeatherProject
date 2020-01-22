import React from 'react'
import { connect } from 'react-redux'

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
} from 'recharts'


function Graphic({ weatherInfos, degreesInfo }) {
    const Fahrenheit = weatherInfos.map(temp => temp.tempFahrenheit)
    const Celsius = weatherInfos.map(temp => temp.tempCelsius)

    const data = [
        { name: 'Mon', temperature: Fahrenheit },
        { name: 'Tue', temperature: Fahrenheit },
        { name: 'Wed', temperature: Fahrenheit },
        { name: 'thu', temperature: Fahrenheit },
        { name: 'Fri', temperature: Fahrenheit },
        { name: 'Sat', temperature: Fahrenheit },
        { name: 'Sun', temperature: Fahrenheit },
    ];

    // if (degreesInfo == 'Celsius') {
    //     data.map(degree => degree.temperature)
    // }




    return (
        <LineChart width={500} height={250} data={data}
            margin={{ top: 5, right: 100, left: 0, bottom: 5 }}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" height={36} align="left" />
            <Line name="Temperature" type="monotone" dataKey="temperature" stroke="#8884d8" align="center" />
        </LineChart>
    )
}

export default connect(state => ({
    weatherInfos: state.weatherInfos,
    degreesInfo: state.degreesInfo
}))(Graphic)