import  {useState} from 'react';

// const mockHistory = ["Austin", "Minneapolis", "Boston"];

function useSearchHistory() {
    const [ searchHistory, setSearchHistory ] = useState( [])


    const getSearchHistory = async () => {
        let history = [];

        if (localStorage.getItem("searchHistory")){
            history = await JSON.parse(localStorage.getItem("searchHistory"));
        }
        setSearchHistory(history)
    }


    const saveSearchHistory = async (searchItem) => {
        let savedSearch = []
        if (localStorage.getItem("searchHistory")) {
            savedSearch = await JSON.parse(localStorage.getItem("searchHistory"));
            if (!savedSearch.includes(searchItem)) {
                savedSearch.push(searchItem);
            }
        } else {
            savedSearch.push(searchItem);
        }

        localStorage.setItem("searchHistory", JSON.stringify(savedSearch));
        setSearchHistory(savedSearch);
    }

    return {
        searchHistory,
        getSearchHistory,
        saveSearchHistory
    }
}

export default useSearchHistory;