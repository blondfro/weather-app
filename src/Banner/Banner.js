import React from 'react';
import "./Banner.css";

function Banner({currDate}) {
    return (
        <div className="app-title-section">
            <h1>Weather Dashboard</h1>
            <h2>{currDate}</h2>
        </div>
    )
}

export default Banner;