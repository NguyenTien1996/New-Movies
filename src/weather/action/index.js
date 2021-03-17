import * as types from './type';

export const getCurrentWeather = (city) => ({
    type: types.GET_CURRENT_WEATHER,
    city
})

export const startGetCurrentWeather = (loading) => ({
    type: types.LOADING_GET_CURRENT_WEATHER,
    loading
})
export const getCurrentWeatherSuccess = (weather) => ({
    type: types.GET_CURRENT_WEATHER_SUCCESS,
    weather
})
export const getCurrentWeatherFail = (error) => ({
    type: types.GET_CURRENT_WEATHER_FAIL,
    error
})
