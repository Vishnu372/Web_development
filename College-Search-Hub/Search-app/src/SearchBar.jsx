import React, { useState } from 'react';
import axios from 'axios'
import './SearchBar.css';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (query) {
      try {
        const response = await axios.get(`http://localhost:5000/search?q=${query}`); 
        if (Array.isArray(response.data)) {
          setResults(response.data);  
        } else {
          setResults([]); 
          setError('No results found or invalid response.');
        }
      } catch (err) {
        setError('Error fetching search results');
        console.error(err.message);
      }
    } else {
      setResults([]); 
    }
  };

  return (
    <div className="search-bar-container">
      <h1 className="search-heading">College Search</h1>
      <div className="search-input-container">
        <input
          type="text"
          placeholder="Search College Name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {error && <div className="error-message">{error}</div>}
      <table className="search-results-table">
  <thead>
    <tr>
      <th>Rank</th>
      <th>College Code</th>
      <th>College Name</th>
      <th>OC Avg</th>
    </tr>
  </thead>
  <tbody>
    {Array.isArray(results) && results.length > 0 ? (
      results.map((result, index) => (
        <tr key={index}>
          <td>{result['PUBLIC PERCEPTION RANK']}</td> 
          <td>{result['College Code']}</td>           
          <td>{result['College Name']}</td>           
          <td>{result['OC AVG']}</td>                 
        </tr>
      ))
    ) : (
      <tr>
        <td colSpan="4">No results found</td>
      </tr>
    )}
  </tbody>
</table>

    </div>
  );
};

export default SearchBar;
