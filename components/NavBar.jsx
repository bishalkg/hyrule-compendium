import React from 'react';
import Link from 'next/link';

export const NavBar = () => {

  return (
   <nav className='nav-bar-container'>
    <ul>
      <li><Link href='/'>LandingPage</Link></li>
      <li><Link href='/home'>Home</Link></li>
      <li><Link href='/monsters'>Monsters</Link></li>
      <li><Link href='/creatures'>Creatures</Link></li>
      <li><Link href='/equipment'>Equipment</Link></li>
      <li><Link href='/materials'>Materials</Link></li>
      <li><Link href='/treasure'>Treasure</Link></li>
    </ul>
  </nav>
  )


};