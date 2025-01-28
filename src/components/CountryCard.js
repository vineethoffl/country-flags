import React from 'react';
import './CountryCard.css';

const CountryCard = ({ name, flag }) => {
  return (
    <div className="country-card">
      <img src={flag} alt={`Flag of ${name}`} className="country-flag" />
      <p className="country-name">{name}</p>
    </div>
  );
};

export default CountryCard;