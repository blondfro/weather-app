import React, {useState} from 'react';
import "./searchHistory.css";

const mockHistory = ["Austin", "Minneapolis", "Boston"];

function SearchHistory() {
    const [searchHistory, setSearchHistory] = useState(mockHistory);

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