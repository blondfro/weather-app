import React, {useContext} from 'react';
import "./Banner.css";
import {WeatherContext} from "../App";
import { getCurrDate } from "../utils/getDate";

function Banner() {
    const currDay = getCurrDate();
    return (
        <div className="app-title-section">
            <h1>Weather Dashboard</h1>
            <h2>{currDay}</h2>
        </div>
    )
}

export default Banner;