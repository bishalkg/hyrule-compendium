import React, { useEffect, useState, Suspense } from 'react';
import axios from 'axios';
import { NavBar } from '../components/NavBar.jsx';
import { MonsterList } from './MonsterList.jsx';
import { SearchBar } from '../components/SearchBar.jsx';

export const Monsters = props => {
  const [monsters, setMonsters] = useState('');
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    axios.get('https://botw-compendium.herokuapp.com/api/v2/category/monsters')
      .then(({data}) => {
        setMonsters(data.data);
        setFilteredMonsters(data.data)
        setIsFetching(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const filterList = (searchQuery) => {
    // console.log(searchQuery, 'in filterList')

    if (!searchQuery.length) {
      return setFilteredMonsters(monsters);
    }

    const filterMonsters = monsters.filter((monster) => {

      if (!monster.common_locations) {
        monster.common_locations = '';
      }
      if (!monster.drops) {
        monster.drops = '';
      }

      if (monster.name.includes(searchQuery)
      || monster.description.includes(searchQuery)
      || monster.common_locations.includes(searchQuery)
      || monster.drops.includes(searchQuery)
      ) {
        return monster;
      } else {
        return '';
      }
    });
    //not filtering by all fields correctly! .includes doesnt look into arrays the same as it does for a string i think
    // console.log(filteredMonsters);

    return setFilteredMonsters(filterMonsters);
  }


  return (
      <div className="monsters-page-container">
        <NavBar />
        <SearchBar currCategory={'Monsters'} filterList={filterList} displayButton={false}/>
        <MonsterList isFetching={isFetching} monsters={filteredMonsters}/>
      </div>

  );
};