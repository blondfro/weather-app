import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./forecastCard.css";

function ForecastCard({isDaily, forecast, date="", condition}) {
    return (
            <div className="card-body">
                {isDaily
                    ? <h6 className="card-header">{date}</h6>
                    : null
                }

                <FontAwesomeIcon icon={condition[0].icon} style={{color: condition[0].color}}/>
                <ul className="list-group list-group-flush borderless">
                    <li className="list-group-item data-display">
                        { !isDaily
                            ? <h5>Temp: </h5>
                            : <h6>Temp: </h6>
                        }
                        {isDaily
                            ? <p className="card-text">{forecast.temp.day}&deg;</p>
                            : <p className="card-text">{forecast.temp}&deg;</p>
                        }
                    </li>
                    <li className="list-group-item data-display">
                        { !isDaily
                            ? <h5>Wind Speed: </h5>
                            : <h6>Wind Speed: </h6>
                        }
                        <p className="card-text">{forecast.wind_speed}</p>
                    </li>
                    <li className="list-group-item data-display">
                        { !isDaily
                            ? <h5>Humidity: </h5>
                            : <h6>Humidity: </h6>
                        }
                        <p className="card-text">{forecast.humidity}%</p>
                    </li>
                    <li className="list-group-item data-display">
                        { !isDaily
                            ? <h5>UV Index: </h5>
                            : <h6>UV Index: </h6>
                        }
                        <p className="card-text">{forecast.uvi}</p>
                    </li>
                </ul>
            </div>
    )
}

export default ForecastCard; 