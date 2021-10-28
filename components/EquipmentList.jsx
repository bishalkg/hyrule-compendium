import React from 'react';
import { InfoCard } from './InfoCard.jsx';

export const EquipmentList = ({equipment}) => {
  return (
    <>
      {!Array.isArray(equipment) ? (<div>fetching...</div>) : (equipment.map((equipment) => {
        return (
          <InfoCard key={equipment.id} equipment={equipment}>
          <ul className="details-container info-flex">
            <li><em id="monster-name">{equipment.name}</em></li>
            <li><em id="info-heading">Description:<br/></em>{equipment.description}</li>
            <li><em id="info-heading">Common Locations:<br/> </em>{equipment.common_locations}</li>
            <li><em id="info-heading">Attack:<br/> </em>{equipment.attack}</li>
            <li><em id="info-heading">Defense:<br/> </em>{equipment.defense}</li>
          </ul>
          </InfoCard>
        )

      }))}
    </>

  );
};