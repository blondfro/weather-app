import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {WeatherContext} from "../App";


function SearchForm() {

    const {handleChange, handleSearch} = useContext(WeatherContext);

    const onSubmit = e => {
        e.preventDefault();
        handleSearch();
    }

    return (
        <form id="search-form" onSubmit={onSubmit}>
            <label htmlFor="search-input">
                Search
                <input
                    type="text"
                    id="search-input"
                    onChange={handleChange}
                />
            </label>
            <button type="button" id="search-btn" onClick={onSubmit}>
                <FontAwesomeIcon icon="search" />
            </button>
        </form>
    )
}

export default SearchForm; 