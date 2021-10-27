import React from 'react';
import { InfoCard } from '../components/InfoCard.jsx';

export const MonsterList = ({isFetching, monsters}) => {

  return (
    <>
      {!Array.isArray(monsters) ? (<div>fetching...</div>) : (monsters.map((monster) => {

        return (
          <InfoCard key={monster.id} monster={monster} isFetching={isFetching} >
          <ul className="details-container info-flex">
            <li><em id="monster-name">{isFetching ? null : monster.name}</em></li>
            <li><em id="info-heading">Description:<br/></em>{isFetching ? null : monster.description}</li>
            <li><em id="info-heading">Common Locations:<br/> </em>{isFetching ? null : monster.common_locations}</li>
            <li><em id="info-heading">Drops:<br/> </em>{ isFetching ? null : monster.drops}</li>
          </ul>
          </InfoCard>
        )

      }))}
    </>

  );
};