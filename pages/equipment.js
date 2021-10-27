import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Equipment({data}) {
  const [equipment1, setEquipment1] = useState('');
  const [equipment2, setEquipment2] = useState('');

  useEffect(() => {
    setEquipment1(data.data[0])
    setEquipment2(data.data[1])
  }, [data])

  return (
    <div className="home-page-container">
      <h3><em id="em-listen">COMING SOON...</em></h3>
    </div>
  );
};


export async function getStaticProps() {

  try {
    const { data } = await axios.get('https://botw-compendium.herokuapp.com/api/v2/category/equipment');
    console.log(data)
    return {
      props: {
        data,
      }
    }
  } catch(e) {
    console.log(e, 'error fetching equipment')
  }

}