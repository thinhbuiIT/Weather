import moment from 'moment';
import React, { memo } from 'react'

function BlockDetail(props) {
    const { detail } = props

    return (
        <div className='border-t-2 border-[salmon] py-2 w-full'>
            <h2 className='content__detail text-[25px] text-[salmon]'>
                {moment(detail.dt * 1000).format('dddd')}
            </h2>
            <div className='flex gap-10'>
                <div className='detail'>
                    <h2 className='detail__title'>
                        Sun and Moon
                    </h2>
                    <div className='detail__block'>
                        <p className='detail__block--items'>Sunrise: {moment(detail.sunrise * 1000).format(' h:mm A')}</p>
                        <p className='detail__block--items'>Sunset: {moment(detail.sunset * 1000).format(' h:mm A')}</p>
                        <p className='detail__block--items'>Moonrise: {moment(detail.moonrise * 1000).format(' h:mm A')}</p>
                    </div>
                    <p className='detail__block--items'>Moonset: {moment(detail.moonset * 1000).format(' h:mm A')}</p>
                </div>
                <div className='detail'>
                    <h2 className='detail__title'>
                        Temperature
                    </h2>
                    <div className='detail__block'>
                        <p className='detail__block--items'>Day: {detail.temp.day}°C</p>
                        <p className='detail__block--items'>Min: {detail.temp.min}°C</p>
                        <p className='detail__block--items'>Max: {detail.temp.max}°C</p>
                        <p className='detail__block--items'>Night: {detail.temp.eve}°C</p>
                    </div>
                </div>
                <div className='detail'>
                    <h2 className='detail__title'>
                        Feels like
                    </h2>
                    <div className='detail__block'>
                        <p className='detail__block--items'>Day: {detail.feels_like.day}°C</p>
                        <p className='detail__block--items'>Eve: {detail.feels_like.eve}°C</p>
                        <p className='detail__block--items'>Morn: {detail.feels_like.morn}°C</p>
                        <p className='detail__block--items'>Night: {detail.feels_like.night}°C</p>
                    </div>
                </div>
                <div className='detail'>
                    <h2 className='detail__title'>
                        Orther
                    </h2>
                    <div className='detail__block'>
                        <p className='detail__block--items'>Wind degress: {detail.wind_deg}° </p>
                        <p className='detail__block--items'>Wind speed: {detail.wind_speed} m/s</p>
                        <p className='detail__block--items'>Clouds: {detail.clouds} %</p>
                        <p className='detail__block--items'>UVI: {detail.uvi} </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default memo(BlockDetail)