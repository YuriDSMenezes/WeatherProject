import React, { useState, useEffect } from "react";

import { api, api_key } from '../../services/api';

import LeftContainer from '../../components/LeftContainer'
import RightContainer from '../../components/RightContainer'
import { MainContent } from "./styles";

export default function Main() {
    const [latitude, setLatitude] = useState();
    const [longitude, setLongitude] = useState();

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
    }, [longitude])

    return (
        <MainContent>
            <LeftContainer weatherInfos={weatherInfos} />
            <RightContainer weatherInfos={weatherInfos} />
        </MainContent>
    );
}
