import React, { useEffect, useState } from 'react';
import { FadeInSection } from './FadeInSection.jsx';
import Image from 'next/image';


export const InfoCard = ({monster, creature, children}) => {
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
          <Image width={300} height={300} src={`${image}`} alt="card showing details" priority/>
        </div>
        {children}
        </div>
      </FadeInSection >
  )
}