import './App.css';
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <div className="App">
  <Navbar />

  <div className="container">
    <div className="row">
      <CountriesList countries={countries} />,
      
    </div>
  </div>
  </div>
  </div>

  useEffect (() => {
  countries()
}, []);
}

export default App;
