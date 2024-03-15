import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import UserList from './UserList';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json")
      .then(result => result.json())
      .then(response => setData(response));
  }, []);

  const removeUser = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const sortByScore = () => {
    const sortedScore = [...data].sort((a, b) => a.twubric.total - b.twubric.total);
    setData(sortedScore);
  };

  const sortByFriends = () => {
    const sortedFried = [...data].sort((a, b) => a.twubric.friends - b.twubric.friends);
    setData(sortedFried);
  };

  const sortByInfluence = () => {
    const sortedInfluence = [...data].sort((a, b) => a.twubric.influence - b.twubric.influence);
    setData(sortedInfluence);
  };

  const sortBycChirpiness = () => {
    const sortedChirpiness = [...data].sort((a, b) => a.twubric.chirpiness - b.twubric.chirpiness);
    setData(sortedChirpiness);
  };

  return (
    <div className="App">
      <Header
        sortByScore={sortByScore}
        sortByFriends={sortByFriends}
        sortByInfluence={sortByInfluence}
        sortBycChirpiness={sortBycChirpiness}
      />
      <UserList
        data={data}
        removeUser={removeUser}
      />
    </div>
  );
}

export default App;
