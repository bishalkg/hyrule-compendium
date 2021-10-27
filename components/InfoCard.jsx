import React, { useEffect, useState } from 'react';
import { FadeInSection } from './FadeInSection.jsx';


export const InfoCard = ({isFetching, monster, creature, children}) => {
  let image = '';
  if (!creature) {
    image = monster.image;
  } else {
    image = creature.image;
  }
  return (
      <FadeInSection className="info-card-container">
        <div className="info-card-container">
        <div className="image-container info-flex">
          <img width="300" heigh="300" src={isFetching ? null : image}></img>
        </div>
        {children}
        {/* <ul className="details-container info-flex">
          <li>Monster Name:{isFetching ? null : monster.name}</li>
          <li> Description:{isFetching ? null : monster.description}</li>
          <li>Common Locations:{isFetching ? null : monster.common_locations}</li>
          <li>Drops:{ isFetching ? null : monster.drops}</li>
        </ul> */}
        </div>
      </FadeInSection >
  )
}