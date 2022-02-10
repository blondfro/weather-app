import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ForecastCard({isDaily}) {
    return (
            <div className="card-body">
                {!isDaily
                    ? <h4 id="todays-date" className="card-title">Feb 9 2022</h4>
                    : <h6 className="card-header">Feb 10 2022 </h6>
                }

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
    )
}

export default ForecastCard; 