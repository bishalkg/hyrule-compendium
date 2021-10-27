import React from 'react';
import Link from 'next/link';

export const NavBar = () => {

  return (
   <nav className='nav-bar-container'>
    <ul>
      <li><Link href='/'>LandingPage</Link></li>
      <li><Link href='/pages/home'>Home</Link></li>
      <li><Link href='/pages/monsters'>Monsters</Link></li>
      <li><Link href='/pages/creatures'>Creatures</Link></li>
      <li><Link href='/pages/equipment'>Equipment</Link></li>
      <li><Link href='/pages/materials'>Materials</Link></li>
      <li><Link href='/pages/treasure'>Treasure</Link></li>
    </ul>
  </nav>
  )


};