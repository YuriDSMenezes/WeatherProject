import React from 'react'
import { connect } from 'react-redux'
import { MdHome, MdArrowUpward, MdArrowDownward, MdCloud } from 'react-icons/md'
import { WiHumidity } from 'react-icons/wi'

import Graphic from '../Graphic'

import { PieceContainer } from './styles'

export default function RightContent({ dates, }) {

    return (
        <>
            <PieceContainer>
                <div>
                    <h3>City <MdHome /> </h3>
                    <p>{dates.city}</p>
                </div>
            </PieceContainer>
            <PieceContainer>
                <div>
                    <p>Wheather Details</p>
                </div>
                <div>
                    <ul>
                        <li>Temp Max  <MdArrowUpward /> </li>
                        <li>Temp Min  <MdArrowDownward /> </li>
                        <li>Cloudy  <MdCloud /> </li>
                        <li>Humidity  <WiHumidity /></li>
                    </ul>
                    <ul>
                        <li>{dates.tempMax}º</li>
                        <li>{dates.tempMin}º</li>
                        <li>{dates.clouds}%</li>
                        <li>{dates.humidity}%</li>
                    </ul>
                </div>
            </PieceContainer>
            <PieceContainer>
                <Graphic dates={dates}/>
            </PieceContainer>
        </>
    )
}