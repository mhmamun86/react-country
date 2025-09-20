import React, { useState } from 'react';
import './Country.css';

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);

  const handlevisited = () => {
    setVisited(visited ? false : true);
    handleVisitedCountries(country);
  };
  return (
    <div className="country">
      <img
        className="img"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h2>Name : {country.name.common}</h2>
      <p>Population : {country.population.population}</p>
      <p>
        Area : {country.area.area}{' '}
        {country.area.area > 30000 ? 'Big Country' : 'Small Country'}
      </p>
      <button onClick={handlevisited}>{visited ? 'Visited' : 'Visit'}</button>
    </div>
  );
};

export default Country;
