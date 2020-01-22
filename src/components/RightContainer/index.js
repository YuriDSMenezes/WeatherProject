import React from 'react'
import { MdHome, MdArrowUpward, MdArrowDownward, MdCloud } from 'react-icons/md'
import { WiHumidity } from 'react-icons/wi'
import { ContainerRight,TitleContent,MainContent,GraphicContent } from './styles'
import Graphic from '../Graphic'

export default function RightContainer({weatherInfos}) {
    return (
        <ContainerRight>
            <TitleContent>
                    <h3>City <MdHome /> </h3>
                    <h2>{weatherInfos.climate}</h2>
                    <p>{weatherInfos.city}</p>
            </TitleContent>
            <MainContent>
                <div>
                    <h3>Wheather Details</h3>
                </div>
                <div>
                    <ul>
                        <li>Temp Max  <MdArrowUpward /> </li>
                        <li>Temp Min  <MdArrowDownward /> </li>
                        <li>Cloudy  <MdCloud /> </li>
                        <li>Humidity  <WiHumidity /></li>
                    </ul>
                    <ul>
                        <li>{weatherInfos.tempMax}º</li>
                        <li>{weatherInfos.tempMin}º</li>
                        <li>{weatherInfos.clouds}%</li>
                        <li>{weatherInfos.humidity}%</li>
                    </ul>
                </div>
            </MainContent>
            <GraphicContent>
                <Graphic/>
            </GraphicContent>
        </ContainerRight>
    )
}