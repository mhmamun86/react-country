import React, { use, useState } from 'react';
import Country from '../Country/Country';
import './Countries.css';

const Countries = ({ Countries }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = country => {
    const found = visitedCountries.some(
      item => item.cca3.cca3 == country.cca3.cca3
    );
    if (found) {
      const deletedCountry = visitedCountries.filter(item => item !== country);
      setVisitedCountries(deletedCountry);
    } else {
      const newVisitedCountry = [...visitedCountries, country];
      setVisitedCountries(newVisitedCountry);
    }
  };
  const countriesData = use(Countries);
  const countries = countriesData.countries;
  return (
    <div>
      <h1>All Country: {countries.length}</h1>
      <h3>Visited Country : {visitedCountries.length}</h3>
      <div className="country-list">
        {visitedCountries.map(visitedCountry => (
          <div>
            <img className="img" src={visitedCountry.flags.flags.png} />
            <h4 key={visitedCountry.cca3.cca3}>{visitedCountry.name.common}</h4>
          </div>
        ))}
      </div>

      <div className="countries">
        {countries.map(country => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
