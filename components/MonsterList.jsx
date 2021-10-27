import React from 'react';
import { InfoCard } from './InfoCard.jsx';

export const MonsterList = ({monsters}) => {

  return (
    <>
      {!Array.isArray(monsters) ? (<div>fetching...</div>) : (monsters.map((monster) => {

        return (
          <InfoCard key={monster.id} monster={monster} >
          <ul className="details-container info-flex">
            <li><em id="monster-name">{monster.name}</em></li>
            <li><em id="info-heading">Description:<br/></em>{monster.description}</li>
            <li><em id="info-heading">Common Locations:<br/> </em>{monster.common_locations}</li>
            <li><em id="info-heading">Drops:<br/> </em>{monster.drops}</li>
          </ul>
          </InfoCard>
        )

      }))}
    </>

  );
};