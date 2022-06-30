import axios, { AxiosResponse, AxiosResponseHeaders } from 'axios';
import { api } from './config';
import { LocationAPIResponse, ForecastAPIResponse } from '../types';


const weatherClient = axios.create({
    baseURL: api.url,
    headers: {
        'Content-Type': 'application/json',
    }
})

export function searchLocation(query: string): Promise<AxiosResponse<LocationAPIResponse[], AxiosResponseHeaders>> {
    return weatherClient.get('/locations/v1/cities/autocomplete', {
        params: {
            apikey: api.apiKey,
            q: query
        }
    });
}

export function getDailyWeatherForecast(locationKey: string)
    : Promise<AxiosResponse<ForecastAPIResponse, AxiosResponseHeaders>> {
    return weatherClient.get(`/forecasts/v1/daily/5day/${locationKey}`, {
        params: {
            apikey: api.apiKey,
            metric: true,
            details: true
        }
    });
}