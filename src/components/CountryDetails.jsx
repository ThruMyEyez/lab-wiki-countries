import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const CountryDetails = ({ countries }) => {
  const { id } = useParams();
  const [country, setCountry] = useState(null);
  const [neighbors, setNeighbors] = useState(null);
  //countries.filter((country) => country.alpha3Code === id)
  //countries.find((country) => country.alpha3Code === id)

  useEffect(() => {
    axios
      .get(`https://ih-countries-api.herokuapp.com/countries/${id}`)
      .then((result) => {
        const countryData = result.data;
        setNeighbors(
          countries.filter((neighbor) => neighbor.borders.includes(id))
        );
        setCountry(countryData);
      });
  }, [id, countries]); //[id] instead of [], because the first time this component gets rendered it always includes the "id" and cannot be mounted without.

  //useEffect(() => {
  //  setNeighbors(countries.filter((neighbor) => neighbor.borders.includes(id)));
  //  //setCountry(countries.find((country) => country.alpha3Code === id));
  //}, [id]);

  return (
    <>
      {country && (
        <div className="col-7">
          <img
            className="my-3"
            style={{ height: '54px', width: '72px' }}
            src={`https://flagpedia.net/data/flags/icon/72x54/${country.alpha2Code.toLowerCase()}.png`}
            alt={country.name.common}
          />
          <h1>{country.name.common}</h1>

          <table className="table">
            <thead></thead>
            <tbody>
              <tr>
                <td style={{ width: '30%' }}>Capital</td>
                <td>{country.capital}</td>
              </tr>
              <tr>
                <td>Area</td>
                <td>
                  {country.area} km <sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Borders</td>
                <td>
                  <ul className="list-group">
                    {neighbors.map((land) => {
                      return (
                        <li className="list-unstyled" key={land.alpha3Code}>
                          <Link to={`/${land.alpha3Code}`}>
                            {land.name.common}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default CountryDetails;
/* 
                <li>
                  <a href="/CHE">Switzerland</a>
                </li>
*/
