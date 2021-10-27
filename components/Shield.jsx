import React, { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export const Shield = ({url}) => {
  const gltf = useLoader(GLTFLoader, url);
  const myShield = useRef();

  useFrame(({ clock }) => {
    myShield.current.position.y = Math.sin(1.8 * clock.getElapsedTime()) * 0.15
  })
  return (
      <primitive ref={myShield} object={gltf.scene} scale={1.5} position={[0, 0, 0]} />
    )
}