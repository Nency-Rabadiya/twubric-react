import React, { useState, useEffect } from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import UserList from './UserList';

function App() {
  const [data, setData] = useState([]);
  const [isAscOrder, setIsAscOrder] = useState(true);

  const handleSort = (sortByFunc) => {
    sortByFunc(isAscOrder);
    setIsAscOrder(prevIsAscOrder => !prevIsAscOrder);
  };

  useEffect(() => {
    fetch("https://gist.githubusercontent.com/pandemonia/21703a6a303e0487a73b2610c8db41ab/raw/82e3ef99cde5b6e313922a5ccce7f38e17f790ac/twubric.json")
      .then(result => result.json())
      .then(response => setData(response));
  }, []);

  const removeUser = (index) => {
    setData(data.filter((_, i) => i !== index));
  };

  const sortByScore = (asc) => {
    const sortedScore = [...data].sort((a, b) => (asc ? a.twubric.total - b.twubric.total : b.twubric.total - a.twubric.total));
    console.log("sortedScore", sortedScore)
    setData(sortedScore);
  };

  const sortByFriends = (asc) => {
    const sortedFried = [...data].sort((a, b) => (asc ? a.twubric.friends - b.twubric.friends : b.twubric.friends - a.twubric.friends));
    console.log("frnd", sortedFried)
    setData(sortedFried);
  };

  const sortByInfluence = (asc) => {
    const sortedInfluence = [...data].sort((a, b) => (asc ? a.twubric.influence - b.twubric.influence : b.twubric.influence - a.twubric.influence));
    console.log("sortedInfluence", sortedInfluence)
    setData(sortedInfluence);
  };

  const sortBycChirpiness = (asc) => {
    const sortedChirpiness = [...data].sort((a, b) => (asc ? a.twubric.chirpiness - b.twubric.chirpiness : b.twubric.chirpiness - a.twubric.chirpiness));
    console.log("sortedChirpiness", sortedChirpiness)
    setData(sortedChirpiness);
  };

  const applyButton = () => {
    console.log()
  }
  return (
    <div className="App">
      <Header
        sortByScore={sortByScore}
        sortByFriends={sortByFriends}
        sortByInfluence={sortByInfluence}
        sortBycChirpiness={sortBycChirpiness}
        handleSort={handleSort}
        applyButton={applyButton}
      />
      <UserList
        data={data}
        removeUser={removeUser}
      />
    </div>
  );
}

export default App;
