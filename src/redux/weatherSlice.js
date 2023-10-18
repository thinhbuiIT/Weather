import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    searchWeather: [],
    dataWeather: [],
    detailWeather: []
}

const weatherSlice = createSlice({
    name: 'weather',
    initialState,
    reducers: {
        getSearchWeather: (state, action) => {
            state.searchWeather = action.payload
        },
        getDataWeather: (state, action) => {
            state.dataWeather = action.payload
        }
    }
})

export const { getSearchWeather, getDataWeather } = weatherSlice.actions
export default weatherSlice.reducer