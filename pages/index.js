import React, { useRef, useState } from "react";
import { Suspense } from 'react';

import * as THREE from 'three';
import { Canvas, useFrame, useThree } from '@react-three/fiber';

import { Shield } from '../components/Shield.jsx';
import { Loader } from '../components/Loader.jsx';
// import ShieldControl from './ShieldControl.jsx';
import Embers from '../components/Stars.jsx';
import { OrbitControls, Environment } from '@react-three/drei';
import { useRouter } from 'next/router'




export default function LandingPage() {
    const router = useRouter()

    return (
    <div className="landing-page">
        <h1 className="title">The Hyrule<br/>Compendium</h1>
        <Canvas >
            <Suspense fallback={<Loader />}>
                <Shield url={"/assets/Shield1/scene.gltf"}  />
                <Environment
                background={false} // Whether to affect scene.background
                preset={'sunset'} // Preset string (overrides files and path)
                // scene={undefined} // adds the ability to pass a custom THREE.Scene
                />
            </Suspense>
            <ambientLight intensity={1} />
            <OrbitControls
            enableRotate={true}
            autoRotate={false}
            // autoRotateSpeed={0.7}
            enableZoom={false}
            />
            {/* <pointLight position={[10, 10, 10]} /> */}
            {/* <Stars
            radius={100} // Radius of the inner sphere (default=100)
            depth={50} // Depth of area where stars should fit (default=50)
            count={5000} // Amount of stars (default=5000)
            factor={10} // Size factor (default=4)
            saturation={0} // Saturation 0-1 (default=0)
            fade // Faded dots (default=false)
            /> */}
            {Array(2500).fill().map((element, index) => <Embers key={index} />)}
        </Canvas>
        {/* <button className="enter-button">Enter</button> */}
        <div className="enter-button-container">
            <button className='enter-button' onClick={() => router.push('/home')}>Enter</button>
        </div>
    </div>
    );
}