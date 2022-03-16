import React, {useContext, useEffect} from 'react';
import "./searchHistory.css";
import useSearchHistory from "../utils/useSearchHistory";
import {WeatherContext} from "../App";


function SearchHistory() {
    const { searchHistory, getSearchHistory } = useSearchHistory();
    const { handleSearch } = useContext(WeatherContext);

    useEffect(()=> {
        getSearchHistory();

    }, [searchHistory])

    const onSearch = (e)=> {
        e.preventDefault();
        let searchName = e.target.innerText.toLowerCase();

        console.log(searchName);
        handleSearch(searchName);
    }

    return (
        <>
            <h3>Search History</h3>
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