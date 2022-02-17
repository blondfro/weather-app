import React, {useContext, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {WeatherContext} from "../App";


function SearchForm() {

    const {handleChange} = useContext(WeatherContext)

    return (
        <form id="search-form">
            <label htmlFor="search-input">
                Search
                <input
                    type="text"
                    id="search-input"
                    onChange={handleChange}
                />
            </label>
            <button type="button" id="search-btn">
                <FontAwesomeIcon icon="search" />
            </button>
        </form>
    )
}

export default SearchForm; 