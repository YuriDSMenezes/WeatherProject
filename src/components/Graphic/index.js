import React, { useState, useEffect } from 'react'
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

    const [temp, setTemp] = useState();

    useEffect(() => {
        if(degreesInfo == "Celsius"){
            weatherInfos.map(i => setTemp(i.tempCelcius))
        }
        else{
            weatherInfos.map(i => setTemp(i.tempFahrenheit))
        }

    }, [degreesInfo,weatherInfos])

    const data = [
        { name: 'Mon', temperature: temp },
        { name: 'Tue', temperature: temp },
        { name: 'Wed', temperature: temp },
        { name: 'thu', temperature: temp },
        { name: 'Fri', temperature: temp },
        { name: 'Sat', temperature: temp },
        { name: 'Sun', temperature: temp },
    ];

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