import React, { useState } from 'react';
import axios from 'axios';
import Input from './input';
import Card from './Cards';

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`https://api.github.com/users/${searchTerm}`);
      setUserData(response.data);
    } 
    catch (err) {
      setError("Utente non trovato!");
    } 
    finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <h1>Cerca qui il tuo GitHub</h1>
      <Input searchTerm={searchTerm} handleInputChange={handleInputChange} handleSearch={handleSearch} />
      <Card loading={loading} error={error} userData={userData} />
    </div>
  );
}

export default UserSearch;
