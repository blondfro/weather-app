import React, {useContext, useEffect} from 'react';
import "./searchHistory.css";
import useSearchHistory from "../utils/useSearchHistory";
import {WeatherContext} from "../App";


function SearchHistory() {
    const { searchHistory, getSearchHistory, clearSearchHistory } = useSearchHistory();
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
                        onClick={onSearch}
                    >{item}</li>
                )
                }
            </ul>

        </>
    )
}

export default SearchHistory;