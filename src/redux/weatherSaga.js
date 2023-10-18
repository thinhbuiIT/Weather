import { call, put, takeEvery } from 'redux-saga/effects';
import { getWeather, searchWeather } from '../service/svcWeather';
import { getDataWeather, getSearchWeather } from './weatherSlice';

function* fetchSearchWeather(action) {
    try {
        const response = yield call(searchWeather, action.payload)
        yield put(getSearchWeather(response.data.list))
    } catch (error) {
        console.log('error : ', error);
    }
}
function* fetchDataWeather(action) {
    try {
        const response = yield call(getWeather, action.payload)
        yield put(getDataWeather(response.data))
    } catch (error) {
        console.log('error : ', error);
    }
}
function* rootSaga() {
    yield takeEvery('SEARCH_WEATHER', fetchSearchWeather)
    yield takeEvery('GET_WEATHER', fetchDataWeather)
}

export default rootSaga