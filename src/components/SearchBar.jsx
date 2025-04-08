import React, { useEffect, useState } from 'react';

const SearchBar = () => {

    const [query, setQuery] = useState();

    useEffect(() => {
        if (query) {
            console.log("Query changed to:", query);
        }
    }, [query]);

    return (
        <>
            <form action="" onSubmit={(event) => {
                event.preventDefault();
                console.log(`Query submitted: ${query}`);
                async function getWeather() {
                    const url = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=624537293cd98022c7d7414a3d507efb&units=metric`;
                    try {
                        const response = await fetch(url);
                        if (!response.ok) {
                            throw new Error(`Response status: ${response.status}`);
                        }

                        const json = await response.json();
                        console.log(json);
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
            </form>
        </>
    );
};

export default SearchBar;