import React, { useState } from 'react';

const SearchUser = () => {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (username.trim() === '') {
      setError('Please enter a GitHub username');
      setUserData(null);
      return;
    }

    try {
      const res = await fetch(`https://api.github.com/users/${username}`);
      if (!res.ok) {
        throw new Error('User not found');
      }
      const data = await res.json();
      setUserData(data);
      setError('');
    } catch (err) {
      setError(err.message);
      setUserData(null);
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div className="user-details">
          <img src={userData.avatar_url} alt="avatar" width="100" />
          <h2>{userData.name || userData.login}</h2>
          <p>{userData.bio}</p>
          <p>Followers: {userData.followers} | Following: {userData.following}</p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default SearchUser;