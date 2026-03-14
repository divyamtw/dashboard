import {useEffect} from 'react';

// const geocode_api = import.meta.env.VITE_GEOCODE_API_URI
const weather_api = import.meta.env.VITE_WEATHER_API_URI
const api_key = import.meta.env.VITE_API_KEY

const Weather = () => {
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    const api = `${weather_api}/weather?lat=26.427&lon=82.5331&appid=${api_key}&units=metric`;

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const res = await fetch(api);
                if (!res.ok) throw new Error("API error");
                const data = await res.json();
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchWeather();
    }, [api]);


    return (
        <div className="flex h-full w-full gap-x-4 rounded-2xl bg-slate-950 p-4">

            {/* Left */}
            <div className="flex w-full flex-col gap-y-3">

                <input
                    type="text"
                    placeholder="Search for cities"
                    className="shrink-0 rounded-2xl bg-slate-700 p-4 font-semibold text-white outline-none"
                />

                <div className="flex flex-1 flex-col gap-y-4">

                    {/* Main Weather Card */}
                    <div className="flex flex-1 items-center justify-between rounded-xl px-4 ">
                        <div className="py-4">
                            <h1 className="text-6xl pt-4 pb-6">City Name</h1>
                            <p className="text-lg opacity-80">Chances of rain</p>
                            <h2 className="text-4xl pt-4">31°</h2>
                        </div>

                        <div className="flex items-center justify-center w-40 h-40 bg-slate-500 rounded-xl">
                            Weather-Img
                        </div>
                    </div>

                    <div className="flex-1 rounded-xl px-4 py-2 bg-slate-700">
                        <h1>Today's Forecast</h1>
                    </div>
                    <div className="flex-1 rounded-xl px-4 py-2 bg-slate-700">
                        <h1>Air Condition</h1>
                    </div>
                </div>

            </div>

            {/* Right */}
            <div className="w-2/5 rounded-2xl bg-slate-700 p-4 flex flex-col">
                <h1 className="shrink-0 font-semibold mb-2">7-DAY FORECAST</h1>

                <div className="flex-1 overflow-y-auto flex flex-col gap-y-4">
                    {days.map(day => (
                        <div
                            key={day}
                            className="p-4 rounded-xl border-b-8 border-r-8 border-slate-950 font-semibold py-8"
                        >
                            {day}
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Weather;