import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5'
})

export const api_key =  '0ccad757b8948d21b05011856bae6950';