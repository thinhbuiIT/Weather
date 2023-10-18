import { combineReducers } from "redux";
import weatherReducer from './weatherSlice';
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from 'redux-saga';
import rootSaga from "./weatherSaga";
const rootReducer = combineReducers({
    weather: weatherReducer
})
const sagaMiddleware = createSagaMiddleware()
const store = configureStore({
    reducer: rootReducer,
    middleware: [sagaMiddleware]
})
export default store
sagaMiddleware.run(rootSaga)