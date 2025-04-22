import './Weather.css';
import { Card } from "flowbite-react";
const Weather = ({ weather, aqi }) => {
    return (
        <>

            <Card>

                {/* Pretty sure this code is a war crime */}
                {weather && weather.weather && <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />}
                {weather && <div>{`${weather.name}`}</div>}
                {weather && weather.main && <div>{`Temperature: ${weather.main.temp}°C`}</div>}
                {weather && weather.main && <div>{`Feels like: ${weather.main.feels_like}°C`}</div>}
                {weather && weather.main && <div>{`Humidity: ${weather.main.humidity}%`}</div>}
                {weather && weather.weather && <div>{`Weather: ${weather.weather[0].description}`}</div>}
                {aqi && aqi.data && <div>{`AQI: ${aqi.data.aqi}`}</div>}
                {
                    weather && weather.sys && weather.timezone && <div> {`Sunrise: ${new Date((weather.sys.sunrise + weather.timezone) * 1000).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                        timeZone: 'UTC',
                    })}`}</div>
                }
                {
                    weather && weather.sys && weather.timezone && <div>{`Sunset: ${new Date((weather.sys.sunset + weather.timezone) * 1000).toLocaleTimeString('en-US', {
                        hour: 'numeric',
                        minute: '2-digit',
                        hour12: true,
                        timeZone: 'UTC',
                    })}`}</div>
                }

            </Card>


        </>
    )
}

export default Weather
