import { Link } from 'react-router-dom';

const CountriesList = ({ countries }) => {
  return (
    <div className="col-5 overflow-auto" style={{ maxHeight: '90vh' }}>
      <div className="list-group">
        {countries.map(({ name, alpha3Code, alpha2Code }) => {
          return (
            <Link
              key={name.common}
              className="list-group-item list-group-item-action d-flex flex-column align-items-center mb-3"
              to={`/${alpha3Code}`}
            >
              <img
                className="mt-3"
                style={{ height: '27px', width: '36px' }}
                src={`https://flagpedia.net/data/flags/icon/72x54/${alpha2Code.toLowerCase()}.png`}
                alt={name.common}
              />
              {name.common}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CountriesList;
