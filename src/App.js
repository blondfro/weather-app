import './App.css';
import Banner from "./Banner/Banner";
import Search from "./Search/Search";
import ForecastDisplay from "./Forecast/ForecastDisplay";

function App() {
  return (
    <div className="App">
        <Banner />
        <Search />
        <ForecastDisplay />
    </div>
  );
}

export default App;
