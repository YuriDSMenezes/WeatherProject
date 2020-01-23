import React, { useState, useEffect } from "react";
import { connect } from 'react-redux'
import Loader from 'react-loader-spinner'

import { api, api_key } from '../../services/api';

import LeftContainer from '../../components/LeftContainer'
import RightContainer from '../../components/RightContainer'
import { MainContent } from "./styles";
import { toast } from "react-toastify";

function Main({ dispatch }) {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();
    const [loading, setLoading] = useState(false);

    const [weatherInfos, setWeatherInfos] = useState([]);

    function convertCelsius(temp) {
        const cell = Math.floor(temp - 273.15)
        return cell;
    }

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            position => {
                const { latitude, longitude } = position.coords;
                setLatitude(latitude);
                setLongitude(longitude);
            },
            err => {
                console.log(err);
            },
            {
                timeout: 10000
            }
        )
    }, [])

    useEffect(() => {
        setLoading(true)
        try {
            async function callApi() {
                const api_geoLocation = await api.get(`/weather?lat=${latitude}&lon=${longitude}&appid=${api_key}`)
                const response = api_geoLocation.data;
                const description = response.weather.map(d => d.main)
                setWeatherInfos({
                    city: response.name,
                    tempFahrenheit: response.main.temp,
                    tempCelcius: convertCelsius(response.main.temp),
                    tempMax: convertCelsius(response.main.temp_max),
                    tempMin: convertCelsius(response.main.temp_min),
                    humidity: response.main.humidity,
                    clouds: response.clouds.all,
                    climate: description
                })
            }
            callApi()
            setTimeout(() => {
                setLoading(false)
            }, 3000)
        } catch (err) {
            toast.error("Não foi possível achar sua localização")
        }

    }, [longitude])

    useEffect(() => {
        dispatch({
            type: 'WEATHER_INFOS',
            weatherInfos,
        })
    }, [weatherInfos])


    return (
        <>
            {loading ? <Loader  type="Rings"/> : (
                <MainContent>
                    <LeftContainer setWeatherInfos={setWeatherInfos} />
                    <RightContainer />
                </MainContent>
            )}
        </>
    );
}

export default connect()(Main)