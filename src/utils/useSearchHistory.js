import  {useState} from 'react';

const mockHistory = ["Austin", "Minneapolis", "Boston"];

function UseSearchHistory() {
    const [ searchHistory, setSearchHistory ] = useState( [mockHistory])

    const getSearchHistory = () => {
        let history = [];

        if (localStorage.getItem("searchHistory")){
            history = JSON.parse(localStorage.getItem("searchHistory"));
            setSearchHistory(history)
        } else {
            setSearchHistory(history)
        }
    }


    const saveSearchHistory = (searchItem) => {
        let savedSearch = []
        if (localStorage.getItem("searchHistory")) {
            savedSearch = JSON.parse(localStorage.getItem("searchHistory"));
            if (!savedSearch.includes(searchItem)) {
                savedSearch.push(searchItem);
            }
        } else {
            searchHistory.push(searchItem);
        }
        setSearchHistory(savedSearch);
        localStorage.setItem("searchHistory", JSON.stringify(searchHistory));
    }

    return { searchHistory, getSearchHistory, saveSearchHistory }
}

export default UseSearchHistory;