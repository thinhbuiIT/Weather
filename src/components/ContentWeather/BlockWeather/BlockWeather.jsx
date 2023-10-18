import React from 'react'

export default function BlockWeather(props) {
    const { daily } = props

    return (
        <div className='block my-8 bg-[salmon] text-center rounded-[12px] p-2 shadow-[0_35px_60px_15px_rgba(0,0,0,0.3)] cursor-pointer'>
            <img src={`https://openweathermap.org/img/wn/${daily.weather.map(ico => ico.icon)}@2x.png`} alt="imagene" />
            <p className='block__time'>{new Date(daily.dt * 1000).toLocaleDateString('en-US', { weekday: 'short' })}</p>
            <p className='block__temp'>{Math.round(daily.temp.max)}°C</p>
        </div>
    )
}
