import ReactDOM from 'react-dom'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three';


export default (props) => {
  const ref = useRef();
  const [x, y, z] = Array(3).fill().map(() => THREE.MathUtils.randFloatSpread(100));
  useFrame((state, delta) => {
    ref.current.position.x += 0.01;
    ref.current.position.y += 0.01;
  })
  return (
    <mesh
      ref={ref}
      position={[x, y, z]}
    >
      <sphereGeometry args={[0.05, 24, 24]} />
      <meshStandardMaterial color={'#FF7700'} />
    </mesh>
  )
}
