import React from 'react';
import { InfoCard } from '../components/InfoCard.jsx';

export const CreatureList = ({isFetching, creatures}) => {

  return (
    <>
      {!Array.isArray(creatures) ? (<div>fetching...</div>) : (creatures.map((creature) => {
        return (
          <InfoCard key={creature.id} creature={creature} isFetching={isFetching} >
          <ul className="details-container info-flex">
            <li><em id="monster-name">{isFetching ? null : creature.name}</em></li>
            <li><em id="info-heading">Description:<br/></em>{isFetching ? null : creature.description}</li>
            <li><em id="info-heading">Common Locations:<br/> </em>{isFetching ? null : creature.common_locations}</li>
            <li><em id="info-heading">Cooking Effects:<br/> </em>{ isFetching ? null : creature.cooking_effect}</li>
            <li><em id="info-heading">Hearts Recovered:<br/> </em>{ isFetching ? null : creature.hearts_recovered}</li>
          </ul>
          </InfoCard>
        )

      }))}
    </>

  );
};