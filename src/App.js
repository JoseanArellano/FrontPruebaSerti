import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import SearchComponent from "./components/SearchComponent";
import FindComponent from "./components/FindComponent";

function App() {
  return (
    <div className="App">
      <FindComponent/>
      <SearchComponent/>
    </div>
  );
}

export default App;
