'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Text3D, Center, Float } from '@react-three/drei'
import * as THREE from 'three'

function Logo3DText() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.1} floatIntensity={0.5}>
      <Center>
        <Text3D
          ref={meshRef}
          font="/fonts/Space_Grotesk_Bold.json"
          size={0.5}
          height={0.1}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          ReNest
          <meshStandardMaterial
            color="#a67c5a"
            metalness={0.8}
            roughness={0.2}
          />
        </Text3D>
      </Center>
    </Float>
  )
}

export default function Logo3D() {
  return (
    <div className="w-32 h-16">
      <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Logo3DText />
      </Canvas>
    </div>
  )
}