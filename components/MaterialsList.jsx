import React from 'react';
import { InfoCard } from './InfoCard.jsx';

export const MaterialsList = ({materials}) => {

  return (
    <>
      {!Array.isArray(materials) ? (<div>fetching...</div>) : (materials.map((materials) => {

        return (
          <InfoCard key={materials.id} monster={monster} >
          <ul className="details-container info-flex">
            <li><em id="monster-name">{materials.name}</em></li>
            <li><em id="info-heading">Description:<br/></em>{materials.description}</li>
            <li><em id="info-heading">Common Locations:<br/> </em>{materials.common_locations}</li>
            <li><em id="info-heading">Drops:<br/> </em>{materials.drops}</li>
          </ul>
          </InfoCard>
        )

      }))}
    </>

  );
};