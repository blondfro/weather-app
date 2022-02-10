import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function SearchForm() {
    const [searchVal, setSearchVal] = useState("");

    return (
        <form id="search-form">
            <label htmlFor="search-input">
                Search
                <input
                    type="text"
                    id="search-input"
                    onChange={event => setSearchVal(event.target.value)}
                />
            </label>
            <button type="button" id="search-btn">
                <FontAwesomeIcon icon="search" />
            </button>
        </form>
    )
}

export default SearchForm; 