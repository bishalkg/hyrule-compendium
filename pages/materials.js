import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from '../components/SearchBar.jsx';
import { CreatureList } from '../components/CreatureList.jsx';

export default function Materials({data}) {
  const [materials, setMaterials] = useState('');
  const [filteredMaterials, setFilteredMaterials] = useState('');


  useEffect(() => {
    setMaterials(data.data);
    setFilteredMaterials(data.data);
  }, [data])

  const filterList = (searchQuery) => {
    if (!searchQuery.length) {
      return setFilteredMaterials(materials);
    }

    const filteredmaterials = materials.filter((materials) => {
      if (materials.name.includes(searchQuery)
      || materials.description.includes(searchQuery)
      || materials.common_locations.includes(searchQuery)
      || materials.cooking_effect.includes(searchQuery)
      || materials.hearts_recovered.toString().includes(searchQuery)
      ) {
        return materials;
      } else {
        return '';
      }
    });

    return setFilteredMaterials(filteredmaterials);
  }


  return (
    <div className="home-page-container">
      <SearchBar currCategory={'Materials'} filterList={filterList} />
      <CreatureList creatures={filteredMaterials} />
    </div>
  );
};


export async function getStaticProps() {

  try {
    const { data } = await axios.get('https://botw-compendium.herokuapp.com/api/v2/category/materials');
    return {
      props: {
        data,
      }
    }
  } catch(e) {
    console.log(e, 'error fetching materials')
  }

}