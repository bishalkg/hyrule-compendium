import React, { useRef, useState } from "react";
import { Suspense } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment } from '@react-three/drei';

import { NavBar } from '../components/NavBar.jsx';
import { Link } from '../components/Link.jsx';
import { Loader } from '../components/Loader.jsx';

export const Home = props => {
  return (
    <div className="home-page-container">
      <NavBar />
      <h3><em id="em-listen">HEY LISTEN!</em><br/>Every Day <em id="em-ganon">GANON </em> Grows Stronger and Stronger, as Hyrule Grows Weak. Challenger, It Is Up To You Now. <br/> You Must Save Hyrule from Centuries of Calamity From <em id="em-ganon">Dark Beast GANON</em>, His True Form! <br/>
        But In Order To <em id="em-persist">per5i5t</em>, You Must Study. <br/><em id="em-final-words">Use This As A Guide During Your Travels Link!</em></h3>
      <Canvas >
            <Suspense fallback={<Loader />}>
                <Link url="/assets/Link/scene.gltf"  />
            </Suspense>
            <ambientLight intensity={1} />
            <OrbitControls
            enableRotate={true}
            autoRotate={true}
            enableZoom={false}
            autoRotateSpeed={1.5}
            />
        </Canvas>
    </div>
  );
};