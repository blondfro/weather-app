import React from 'react';
import SearchForm from "./SearchForm";
import SearchHistory from "./SearchHistory";

import "./search.css";

function Search() {


    return (
        <div className="search-section">
            <SearchForm />
            <SearchHistory />
        </div>
    )
}

export default Search; 