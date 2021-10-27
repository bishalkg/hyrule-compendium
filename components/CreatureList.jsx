import React from 'react';
import { InfoCard } from './InfoCard.jsx';

export const CreatureList = ({creatures}) => {

  return (
    <>
      {!Array.isArray(creatures) ? (<div>fetching...</div>) : (creatures.map((creature) => {
        return (
          <InfoCard key={creature.id} creature={creature}>
          <ul className="details-container info-flex">
            <li><em id="monster-name">{creature.name}</em></li>
            <li><em id="info-heading">Description:<br/></em>{creature.description}</li>
            <li><em id="info-heading">Common Locations:<br/> </em>{creature.common_locations}</li>
            <li><em id="info-heading">Cooking Effects:<br/> </em>{creature.cooking_effect}</li>
            <li><em id="info-heading">Hearts Recovered:<br/> </em>{creature.hearts_recovered}</li>
          </ul>
          </InfoCard>
        )

      }))}
    </>

  );
};