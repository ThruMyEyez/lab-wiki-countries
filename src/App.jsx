import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
//import countriesJSON from './countries.json'; // alternative data to FetchAPI

const App = () => {
  const [countries, setCountries] = useState(null);
  useEffect(() => {
    axios
      .get('https://ih-countries-api.herokuapp.com/countries')
      .then((results) => {
        const countriesFromAPI = results.data;
        setCountries(countriesFromAPI);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      {(countries && (
        <div className="container">
          <div className="row">
            <CountriesList countries={countries} />
            <Routes>
              <Route
                path="/:id"
                element={<CountryDetails countries={countries} />}
              />
            </Routes>
          </div>
        </div>
      )) || <h1>Loading...</h1>}
    </div>
  );
};

export default App;
