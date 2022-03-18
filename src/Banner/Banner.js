import React from 'react';
import "./Banner.css";

import { getCurrDate } from "../utils/getDate";

function Banner() {
    const currDay = getCurrDate();
    return (
        <div className="app-title-section">
            <h1>Weather Dashboard</h1>
            <h2>{currDay.name}, {currDay.date}</h2>
        </div>
    )
}

export default Banner;