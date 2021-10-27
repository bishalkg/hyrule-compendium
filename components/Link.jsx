import React, { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'


export const Link = ({url}) => {
  const gltf = useLoader(GLTFLoader, url);
  const myLink = useRef();

  // useFrame(({ clock }) => {
  //   myLink.current.position.y = Math.sin(1.8 * clock.getElapsedTime()) * 0.15
  // })
  return (
      <primitive ref={myLink} object={gltf.scene} scale={0.025} position={[0, -4.5, 0]} />
    )
}