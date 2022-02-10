import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ForecastCard() {
    return (
        <div>
            <h3 id="city-name" className="card">Austin</h3>
            <div>
                <h4 id="todays-date">Feb 9 2022</h4>
                <FontAwesomeIcon icon="sun" />
                <ul className="list-group list-group-flush borderless">
                    <li className="list-group-item">
                        <h5>Temp: </h5>
                        <p className="card-text">95&deg</p>
                    </li>
                    <li className="list-group-item">
                        <h5>Wind Speed: </h5>
                        <p className="card-text">75mph</p>
                    </li>
                    <li className="list-group-item">
                        <h5>Humidity: </h5>
                        <p className="card-text">10%</p>
                    </li>
                    <li className="list-group-item">
                        <h5>UV Index: </h5>
                        <p className="card-text">2</p>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default ForecastCard; 