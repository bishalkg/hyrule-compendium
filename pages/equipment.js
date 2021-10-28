import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { SearchBar } from '../components/SearchBar.jsx';
import { EquipmentList } from '../components/EquipmentList.jsx';

export default function Equipment({data}) {
  const [equipment, setEquipment] = useState('');
  const [filteredEquipment, setFilteredEquipment] = useState('');


  useEffect(() => {
    setEquipment(data.data);
    setFilteredEquipment(data.data);
  }, [data])

  const filterList = (searchQuery) => {
    if (!searchQuery.length) {
      return setFilteredEquipment(equipment);
    }

    const filteredEquipment = equipment.filter((equipment) => {

      if (!equipment.common_locations) {
        equipment.common_locations = '';
      }
      if (!equipment.attack) {
        equipment.attack = '';
      }
      if (!equipment.defense) {
        equipment.defense = '';
      }

      if (equipment.name.includes(searchQuery)
      || equipment.description.includes(searchQuery)
      || equipment.common_locations.includes(searchQuery)
      || equipment.attack.toString().includes(searchQuery)
      || equipment.defense.toString().includes(searchQuery)
      ) {
        return equipment;
      } else {
        return '';
      }
    });

    return setFilteredEquipment(filteredEquipment);
  }


  return (
    <div className="home-page-container">
      <SearchBar currCategory={'Equipment'} filterList={filterList} />
      <EquipmentList equipment={filteredEquipment} />
    </div>
  );
};


export async function getStaticProps() {

  try {
    const { data } = await axios.get('https://botw-compendium.herokuapp.com/api/v2/category/equipment');
    return {
      props: {
        data,
      }
    }
  } catch(e) {
    console.log(e, 'error fetching equipment')
  }

}