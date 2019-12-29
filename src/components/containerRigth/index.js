import React from 'react'

import {PieceContainer} from './styles'

export default function RightContent({dates}) {
    return (
        <>
            <PieceContainer>
                <div>
                    <h3>City <i className="wi wi-train"></i> </h3>
                    <p>{dates.city}</p>
                </div>
            </PieceContainer>
            <PieceContainer>
                <div>
                    <p>Wheather Details</p>
                </div>
                <div>
                    <ul>
                        <li>Temp Max  <i className="wi wi-direction-up"></i> </li>
                        <li>Temp Min  <i className="wi wi-direction-down"></i> </li>
                        <li>Cloudy  <i className="wi wi-cloud"></i></li>
                        <li>Humidity  <i className="wi wi-humidity"></i></li>
                    </ul>
                    <ul>
                        <li>{dates.tempMax}º</li>
                        <li>{dates.tempMin}º</li>
                        <li>{dates.clouds}%</li>
                        <li>{dates.humidity}%</li>
                    </ul>
                </div>
            </PieceContainer>
        </>
    )
}