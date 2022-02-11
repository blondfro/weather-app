import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function ForecastCard({isDaily, forecast, date=""}) {
    return (
            <div className="card-body">
                {!isDaily
                    ? <h4 id="todays-date" className="card-title">Today's Forecast</h4>
                    : <h6 className="card-header">{date}</h6>
                }

                <FontAwesomeIcon icon="sun" />
                <ul className="list-group list-group-flush borderless">
                    <li className="list-group-item">
                        { !isDaily
                            ? <h5>Temp: </h5>
                            : <h7>Temp: </h7>
                        }
                        {isDaily
                            ? <p className="card-text">{forecast.temp.day}</p>
                            : <p className="card-text">{forecast.temp}</p>
                        }
                    </li>
                    <li className="list-group-item">
                        { !isDaily
                            ? <h5>Wind Speed: </h5>
                            : <h7>Temp: </h7>
                        }
                        <p className="card-text">{forecast.wind_speed}</p>
                    </li>
                    <li className="list-group-item">
                        { !isDaily
                            ? <h5>Humidity: </h5>
                            : <h7>Temp: </h7>
                        }
                        <p className="card-text">{forecast.humidity}%</p>
                    </li>
                    <li className="list-group-item">
                        { !isDaily
                            ? <h5>UV Index: </h5>
                            : <h7>Temp: </h7>
                        }
                        <p className="card-text">{forecast.uvi}</p>
                    </li>
                </ul>
            </div>
    )
}

export default ForecastCard; 