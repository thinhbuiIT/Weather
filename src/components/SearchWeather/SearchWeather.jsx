import React, { memo, useState } from 'react'
import './SearchWeather.scss'
import { useDispatch, useSelector } from 'react-redux'


function SearchWeather() {
    const dispatch = useDispatch()
    const weatherData = useSelector(state => state.weather.searchWeather)

    const HandleSearch = (e) => {
        e.keyCode === 13 && dispatch({ type: 'SEARCH_WEATHER', payload: e.target.value })
    }
    const HandleGetWeather = (data) => {
        dispatch({ type: 'GET_WEATHER', payload: data })
    }

    return (
        <div className='search px-2 py-3 w-1/4 h-[100vh]'>
            <div className='search__input mb-5'>
                <input
                    onKeyUp={(e) => HandleSearch(e)}
                    className='p-1 py-2 rounded-[8px] w-full outline-none'
                    type="text"
                    placeholder='Search...' />
                <p className='text-white'>Enter to search</p>
            </div>
            <div className='search__content flex flex-col gap-3'>
                {
                    weatherData?.map((wt, index) => (
                        <div
                            className='search__content--block bg-white  p-3 rounded-[8px] cursor-pointer'
                            onClick={() => HandleGetWeather(wt.coord)}
                            key={index}
                        >
                            <div className='flex gap-2 items-center'>
                                <img src={`https://openweathermap.org/images/flags/${(wt.sys.country).toLowerCase()}.png`} alt="asdasd" />
                                <h2>{wt.name}</h2>
                            </div>
                            <p className=''>
                                <span className='bg-slate-500 text-white rounded-[12px] p-1 mr-1'>{Math.floor(wt.main.temp - 273)}°C</span>
                                temperature from {Math.floor(wt.main.temp - 273)} - {Math.floor(wt.main.temp - 273)}°C wind {wt.wind.speed} m/s clouds {wt.clouds.all} % Geo coords [{wt.coord.lat}, {wt.coord.lon}]
                            </p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default memo(SearchWeather)