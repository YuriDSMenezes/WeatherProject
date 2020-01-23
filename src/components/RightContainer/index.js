import React from 'react'
import { MdHome, MdArrowUpward, MdArrowDownward, MdCloud } from 'react-icons/md'
import { WiHumidity } from 'react-icons/wi'
import { ContainerRight, TitleContent, MainContent, GraphicContent } from './styles'
import Graphic from '../Graphic'

import { connect } from 'react-redux'

function RightContainer({ weatherInfos }) {
    return (
        <ContainerRight>
            {weatherInfos.map(info => (
                <>
                    <TitleContent>
                        <div>
                            <h3>City</h3>
                            <MdHome size={18} />
                        </div>
                        <h2>{info.climate}</h2>
                        <p>{info.city}</p>
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
                                <li>{info.tempMax}º</li>
                                <li>{info.tempMin}º</li>
                                <li>{info.clouds}%</li>
                                <li>{info.humidity}%</li>
                            </ul>
                        </div>
                    </MainContent>
                </>
            ))}
            <GraphicContent>
                <Graphic />
            </GraphicContent>
        </ContainerRight>
    )
}

export default connect(state => ({
    weatherInfos: state.weatherInfos
}))(RightContainer)