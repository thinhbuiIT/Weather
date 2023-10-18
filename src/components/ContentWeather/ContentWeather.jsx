import React, { memo, useState } from 'react'
import { useSelector } from 'react-redux'

import moment from 'moment-timezone';
import BlockWeather from './BlockWeather/BlockWeather'
import BlockDetail from './BlockDetail/BlockDetail'

import './ContentWeather.scss'

function ContentWeather() {
    const [detail, setDetail] = useState([])
    const dataWeather = useSelector(state => state.weather.dataWeather)

    const HandleGetDetail = (id) => {
        setDetail(dataWeather.daily.filter((it, index) => id === index))
    }

    return (
        <div className='content w-3/4 px-5 py-4'>
            <div className='content__time'>
                <h2 className='content__time--title text-[50px] bold'>{dataWeather.timezone && moment().tz(dataWeather.timezone).format('h:mm A')}</h2>

                <p className='content__time--paragraph'>
                    {
                        dataWeather.timezone && moment().tz(dataWeather.timezone).format('LLL')
                    }
                </p>
            </div>
            <div className='content__weather mt-5'>
                <h2 className='content__weather--title'>
                    {dataWeather.timezone && 'Welcome to' + dataWeather.timezone}
                </h2>
                <div className='content__weather--block flex gap-2'>
                    {
                        dataWeather.daily?.map((daily, id) => (
                            <div onClick={() => HandleGetDetail(id)} key={id}>
                                <BlockWeather daily={daily} />
                            </div>

                        ))
                    }
                </div>
            </div>
            <div className='content__detail mt-5'>
                <div className='content__detail--block flex gap-5'>
                    {
                        detail.map((dt, i) => <BlockDetail key={i} detail={dt} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default memo(ContentWeather)