import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from '../components/SearchBar.jsx';
import { MonsterList } from '../components/MonsterList.jsx';

export default function Treasure({data}) {
  const [treasure, setTreasure] = useState('');
  const [filteredTreasure, setFilteredTreasure] = useState('');


  useEffect(() => {
    setTreasure(data.data);
    setFilteredTreasure(data.data);
  }, [data])

  const filterList = (searchQuery) => {
    if (!searchQuery.length) {
      return setFilteredTreasure(treasure);
    }

    if (!treasure.common_locations) {
      treasure.common_locations = '';
    }
    if (!treasure.drops) {
      treasure.drops = '';
    }

    const filteredTreasure = treasure.filter((treasure) => {
      if (treasure.name.includes(searchQuery)
      || treasure.description.includes(searchQuery)
      || treasure.common_locations.includes(searchQuery)
      || treasure.drops.includes(searchQuery)
      ) {
        return treasure;
      } else {
        return '';
      }
    });

    return setFilteredTreasure(filteredTreasure);
  }

  return (
    <div className="home-page-container">
      <SearchBar currCategory={'Treasure'} filterList={filterList} />
      <MonsterList monsters={filteredTreasure} />
    </div>
  );
};


export async function getStaticProps() {

  try {
    const { data } = await axios.get('https://botw-compendium.herokuapp.com/api/v2/category/treasure');
    return {
      props: {
        data,
      }
    }
  } catch(e) {
    console.log(e, 'error fetching materials')
  }

}