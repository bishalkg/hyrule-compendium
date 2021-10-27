import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CreatureList } from '../components/CreatureList.jsx';
import { MonsterList } from '../components/MonsterList.jsx';
import { SearchBar } from '../components/SearchBar.jsx';

export default function Creatures({data}) {
  const [creaturesFood, setCreaturesFood] = useState('');
  const [creaturesNonFood, setCreaturesNonFood] = useState('');
  const [currCategory, setCurrCategory] = useState('food');

  const [filteredCreaturesFood, setFilteredCreaturesFood] = useState(creaturesFood);

  const [filteredCreaturesNonFood, setFilteredCreaturesNonFood] = useState(creaturesNonFood);


  useEffect(() => {
    setCreaturesFood(data.data.food);
    setCreaturesNonFood(data.data.non_food);
    setFilteredCreaturesFood(data.data.food);
    setFilteredCreaturesNonFood(data.data.non_food);
  }, [data]);

  const filterList = (searchQuery) => {
    // set the reference of creatures to filter
    let currCreatures = creaturesFood;
    if (currCategory !== 'food') {
      currCreatures = creaturesNonFood;
    }
    //if the searchQuery is Empty, set all creatures from the appropriate set
    if (!searchQuery.length && currCategory === 'food') {
      return setFilteredCreaturesFood(creaturesFood);
    } else if (!searchQuery.length && currCategory === 'non-food') {
      return setFilteredCreaturesNonFood(creaturesNonFood);
    }

    // console.log(currCategory, 'filterList');
    //filterFoodCreatures and filterNonFoodCreatures Separately
    if (currCategory === 'food') {
      const filterCreatures = currCreatures.filter((creature) => {
        if (!creature.common_locations) {
          creature.common_locations = '';
        }
        // if (!creature.hearts_recovered) {
        //   creature.hearts_recovered = '';
        // }
        if (creature.name.includes(searchQuery)
        || creature.description.includes(searchQuery)
        || creature.common_locations.includes(searchQuery)
        ) {
          return creature;
        } else {
          return '';
        }
      });

      return setFilteredCreaturesFood(filterCreatures);
    } else {
      const filterCreatures = currCreatures.filter((creature) => {
        if (!creature.common_locations) {
          creature.common_locations = '';
        }
        if (!creature.drops) {
          creature.drops = '';
        }

        if (creature.name.includes(searchQuery)
        || creature.description.includes(searchQuery)
        || creature.common_locations.includes(searchQuery)
        || creature.drops.includes(searchQuery)
        ) {
          return creature;
        } else {
          return '';
        }
      });

      return setFilteredCreaturesNonFood(filterCreatures);
    }
  }

  const toggleCreatures = (e) => {
    e.preventDefault();
    if (currCategory === 'food') {
      setCurrCategory('non-food')
    } else {
      setCurrCategory('food');
    }

  }


  return (
    <div className="creatures-page-container">
      <SearchBar
        currCategory={currCategory === 'food' ? 'food' : 'non-food'}
        otherCategory={currCategory === 'food' ? 'non-food' : 'food'}
        toggleCreatures={toggleCreatures}
        filterList={filterList}
        displayButton={true}
      />
      {currCategory === 'food' ? (<CreatureList creatures={filteredCreaturesFood} />) : (<MonsterList monsters={filteredCreaturesNonFood} />)}

    </div>
  );
};


export async function getStaticProps() {
  try {
    const { data } = await axios.get('https://botw-compendium.herokuapp.com/api/v2/category/creatures')
    return {
      props: {
        data,
      }
    }
  } catch(e) {
    console.log(e, 'error fetching creatures')
  }

}