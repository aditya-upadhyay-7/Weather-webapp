import { useState } from "react";
import InfoBox from "./infoBox";
import SearchBox from "./SearchBox.jsx";

export default function WeatherApp() {

    const [weatherInfo, setWeatherInfo] = useState(
        {
            city: "Wonderland",
            feelsLike: 37.05,
            humidity: 79,
            temp: 30.05,
            tempMax: 30.05,
            tempMin: 30.05,
            weather: "mist",
        }
    );

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign: "center"}}>
            <h2>Weather App by Aditya</h2>
            <SearchBox updateInfo={updateInfo}/>
            <hr/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}