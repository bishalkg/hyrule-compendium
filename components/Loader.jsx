import React from 'react';
import { useProgress, Html } from '@react-three/drei';

export const Loader = () => {
  const { active, progress, errors, item, loaded, total } = useProgress()
  return <Html style={{ color: 'white' }} center>{progress} % loaded</Html>
}