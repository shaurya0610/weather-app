import React, { useEffect, useState } from 'react';

const owmApiKey = import.meta.env.VITE_OWM_API_KEY;
const aqicnApiKey = import.meta.env.VITE_AQICN_API_KEY;

const SearchBar = ({ setWeather, setAqi }) => {

    const [query, setQuery] = useState();
    const [message, setMessage] = useState(); //For telling the user to enter a valid city
    const popularCities = ["delhi", "mumbai", "bangalore", "chennai", "hyderabad"];

    useEffect(() => {
        if (message) {
            console.log("Message changed to:", message);
            setTimeout(() => {
                setMessage("");
                console.log("Message emptied.");
            }, 7000);
        }
    }, [message]);

    return (
        <>
            <form action="" onSubmit={(event) => {
                event.preventDefault();
                console.log(`Query submitted: ${query}`);
                async function getWeather() {
                    const owm_url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${owmApiKey}&units=metric`;
                    const aqi_url = `https://api.waqi.info/feed/${query}/?token=${aqicnApiKey}`;
                    try {
                        const owm_response = await fetch(owm_url);
                        const aqi_response = await fetch(aqi_url);
                        if (!owm_response.ok && owm_response.status !== 404) {
                            throw new Error(`OWM Response status: ${owm_response.status}`);
                        } else if (owm_response.status === 404) {
                            setMessage("Please enter a valid city.");
                            setWeather(null);
                            setAqi(null);
                            return;
                        }

                        if (!aqi_response.ok) {
                            throw new Error(`AQICN Response status: ${aqi_response.status}`);
                        }

                        const owm_json = await owm_response.json();
                        const aqi_json = await aqi_response.json();
                        console.log(owm_json);
                        console.log(aqi_json);
                        setWeather(owm_json);
                        setAqi(aqi_json);
                    } catch (error) {
                        console.error(error.message);
                    }
                }
                getWeather();
            }}>
                <input
                    type="text"
                    placeholder="Search for a city..."
                    onChange={(event) => {
                        setQuery(event.target.value);
                    }}
                    className="p-2 rounded-xl border"
                />
                <button className='p-2 rounded-xl border opacity-75'>Search</button>
                <div>
                    <span>Popular Cities:</span>

                    {/* Render a button for each city in the popularCities array */}
                    {popularCities.map((city) => (
                        <button
                            key={city} //Give each button a unique "key" (required by React when rendering lists)
                            onClick={() => setQuery(city)}
                            className="p-2 rounded-xl border"
                        >
                            {/* Capitalising first letter in each button label */}
                            {String(city).charAt(0).toUpperCase() + String(city).slice(1)}
                        </button>
                    ))}

                </div>
            </form>
            {message && <p className="text-red-500 mt-2 transition-all">{message}</p>}
        </>
    );
};

export default SearchBar;