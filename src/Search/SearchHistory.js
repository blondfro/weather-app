import React, {useContext, useEffect} from 'react';
import "./searchHistory.css";
import useSearchHistory from "../utils/useSearchHistory";
import {WeatherContext} from "../App";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SearchHistory() {
    const { searchHistory, getSearchHistory, clearSearchHistory, removeSearchItem } = useSearchHistory();
    const { handleSearch } = useContext(WeatherContext);

    useEffect(()=> {
        const interval = setInterval(()=> {
            getSearchHistory();
        }, 1000)

        return ()=>clearInterval(interval)

    }, [])

    const onSearch = (e)=> {
        e.preventDefault();
        let searchName = e.target.innerText.toLowerCase();
        handleSearch(searchName);
    }

    return (
        <>
            <h3>Search History</h3>
            <button onClick={clearSearchHistory}>Clear History</button>
            <ul id="search-history-list">
                {searchHistory.map((item, index) =>
                    <li
                        key={index}
                        className="search-list-item"
                    >
                        <p onClick={onSearch}>{item}</p>
                        <button onClick={() => removeSearchItem(item)}>
                            <FontAwesomeIcon icon="trash-can" />
                        </button>
                    </li>
                )
                }
            </ul>

        </>
    )
}

export default SearchHistory;