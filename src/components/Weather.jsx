const Weather = ({ weather, aqi }) => {
    return (
        <>
            {/* Pretty sure this code is a war crime */}
            {weather && weather.weather && <img src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={weather.weather[0].description} />}
            {weather && <h3 className="text-2xl">{`${weather.name}`}</h3>}
            {weather && weather.main && <p>{`Temperature: ${weather.main.temp}°C`}</p>}
            {weather && weather.main && <p>{`Feels like: ${weather.main.feels_like}°C`}</p>}
            {weather && weather.main && <p>{`Humidity: ${weather.main.humidity}%`}</p>}
            {weather && weather.weather && <p>{`Weather: ${weather.weather[0].description}`}</p>}
            {aqi && aqi.data && <p>{`AQI: ${aqi.data.aqi}`}</p>}

            {weather && weather.sys && weather.timezone && <p> {`Sunrise: ${new Date((weather.sys.sunrise + weather.timezone) * 1000).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'UTC',
            })}`}</p>}

            {weather && weather.sys && weather.timezone && <p>{`Sunset: ${new Date((weather.sys.sunset + weather.timezone) * 1000).toLocaleTimeString('en-US', {
                hour: 'numeric',
                minute: '2-digit',
                hour12: true,
                timeZone: 'UTC',
            })}`}</p>
            }
        </>
    )
}

export default Weather
