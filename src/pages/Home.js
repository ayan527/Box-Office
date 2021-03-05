import { React, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';

const Home = () => {
  const [search, setSearch] = useState('');

  const updateSearch = ev => {
    setSearch(ev.target.value);
    // console.log(ev.target.value);
  };

  const startSearching = () => {
    fetch(`https://api.tvmaze.com/search/shows?q=${search}`)
      .then(response => response.json())
      .then(result => console.log(result));
  };

  const pressEnter = ev => {
    if (ev.keyCode === 13) {
      startSearching();
    }
  };

  return (
    <MainPageLayout>
      <input
        type="text"
        onChange={updateSearch}
        onKeyDown={pressEnter}
        value={search}
      />
      <button type="button" onClick={startSearching}>
        Search
      </button>
    </MainPageLayout>
  );
};

export default Home;
