import axios from "axios"


export const searchWeather = async (key) => {
    return await axios.get(`https://openweathermap.org/data/2.5/find?q=${key}&appid=439d4b804bc8187953eb36d2a8c26a02`)
}
export const getWeather = async (data) => {
    const { lat, lon } = data
    return await axios.get(`https://openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=439d4b804bc8187953eb36d2a8c26a02`)
}