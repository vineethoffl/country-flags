import React, { useState, useEffect } from 'react';
import './App.css'; // Main styles
import CountryCard from './components/CountryCard';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch('https://xcountries-backend.azurewebsites.net/all');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setCountries(data);
      } catch (err) {
        console.error(`Error fetching data: ${err.message}`);
        setError(err.message);
      }
    };

    fetchCountries();
  }, []);

  if (error) {
    return <div className="error">Error loading countries: {error}</div>;
  }

  return (
    <div className="country-list">
      {countries.map((country, index) => (
        <CountryCard key={index} name={country.name} flag={country.flag} />
      ))}
    </div>
  );
};

export default App;
