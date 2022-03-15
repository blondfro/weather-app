import React, {useEffect} from 'react';
import "./searchHistory.css";
import useSearchHistory from "../utils/useSearchHistory";


function SearchHistory() {
    const { searchHistory, getSearchHistory } = useSearchHistory();

    useEffect(()=> {
        getSearchHistory();

    }, [searchHistory])

    return (
        <>
            <h3>Search History</h3>
            <ul id="search-history-list">
                {searchHistory.map((item, index) =>
                    <li key={index} className="search-list-item">{item}</li>
                )
                }
            </ul>

        </>
    )
}

export default SearchHistory;