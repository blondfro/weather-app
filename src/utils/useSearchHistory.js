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
        let searchLwrCase = searchItem.toLowerCase();

        if (localStorage.getItem("searchHistory")) {
            savedSearch = await JSON.parse(localStorage.getItem("searchHistory"));
            let lwrCaseHistory = savedSearch.map(item => {
                let newItem = item.toLowerCase();
                return newItem
            });
            if (!lwrCaseHistory.includes(searchLwrCase)) {
                savedSearch.push(searchLwrCase);
            }
        } else {
            savedSearch.push(searchLwrCase);
        }


        let upprCaseHistory = savedSearch.map(item => {
            let itemArr = item.split(" ");
            let newItem = itemArr.map(word => {
                let newWord = word.charAt(0).toUpperCase() + word.slice(1);
                return newWord
            }).join(" ");
            return newItem
        });
        localStorage.setItem("searchHistory", JSON.stringify(upprCaseHistory));
        setSearchHistory(upprCaseHistory);
    }

    const clearSearchHistory = () => {
        localStorage.removeItem("searchHistory");
        setSearchHistory([])
    }

    return {
        searchHistory,
        getSearchHistory,
        saveSearchHistory,
        clearSearchHistory
    }
}

export default useSearchHistory;