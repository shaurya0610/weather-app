import './Weather.css';
import { Card } from "flowbite-react";

const Weather = ({ weather, aqi }) => {

    const weatherInfo = [
        { label: 'City', value: weather?.name },
        { label: 'Temperature', value: weather?.main?.temp ? `${weather.main.temp}°C` : null },
        { label: 'Feels Like', value: weather?.main?.feels_like ? `${weather.main.feels_like}°C` : null },
        { label: 'Humidity', value: weather?.main?.humidity ? `${weather.main.humidity}%` : null },
        { label: 'Weather', value: weather?.weather?.[0]?.description },
        { label: 'AQI', value: aqi?.data?.aqi },
        {
            label: 'Sunrise',
            value: weather?.sys && weather?.timezone
                ? new Date((weather.sys.sunrise + weather.timezone) * 1000).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                    timeZone: 'UTC',
                })
                : null
        },
        {
            label: 'Sunset',
            value: weather?.sys && weather?.timezone
                ? new Date((weather.sys.sunset + weather.timezone) * 1000).toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true,
                    timeZone: 'UTC',
                })
                : null
        },
    ];

    return (
        <div className="flex w-full justify-center">
            <Card className="w-96 h-auto">
                <div className="flex flex-col gap-4 items-center">
                    {weather?.weather?.[0]?.icon && (
                        <img
                            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                            alt={weather.weather[0].description}
                            className="w-20 h-20"
                        />
                    )}
                    {weatherInfo.map((item, index) =>
                        item.value ? (
                            <div key={index} className="text-center">
                                <span className="font-semibold">{item.label}:</span> {item.value}
                            </div>
                        ) : null
                    )}
                </div>
            </Card>
        </div>
    );
};

export default Weather;
