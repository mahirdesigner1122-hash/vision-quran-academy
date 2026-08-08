"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const LOCATIONS: { name: string; lat: number; lon: number }[] = [
  { name: "USA", lat: 39, lon: -98 },
  { name: "UK", lat: 54, lon: -2 },
  { name: "Canada", lat: 56, lon: -106 },
  { name: "Australia", lat: -25, lon: 133 },
  { name: "UAE", lat: 24, lon: 54 },
  { name: "Europe", lat: 48, lon: 12 },
  { name: "Worldwide", lat: 10, lon: 20 },
];

function latLonToVec3(lat: number, lon: number, radius: number) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
}

function Globe() {
  const group = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.08;
  });

  const points = useMemo(
    () => LOCATIONS.map((l) => ({ ...l, pos: latLonToVec3(l.lat, l.lon, 2.02) })),
    []
  );

  const wireGeo = useMemo(() => new THREE.IcosahedronGeometry(2, 3), []);

  return (
    <group ref={group}>
      <mesh>
        <sphereGeometry args={[1.98, 48, 48]} />
        <meshStandardMaterial
          color="#0B4A36"
          metalness={0.25}
          roughness={0.7}
          emissive="#063B2B"
          emissiveIntensity={0.3}
        />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[wireGeo]} />
        <lineBasicMaterial color="#C9952E" transparent opacity={0.18} />
      </lineSegments>

      {points.map((p, i) => (
        <group key={i} position={p.pos}>
          <mesh>
            <sphereGeometry args={[0.035, 12, 12]} />
            <meshStandardMaterial
              color="#E7C76A"
              emissive="#E7C76A"
              emissiveIntensity={1.2}
            />
          </mesh>
        </group>
      ))}
    </group>
  );
}

export default function GlobeScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.6], fov: 40 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.6} color="#F8F4EA" />
      <directionalLight position={[4, 3, 5]} intensity={1} color="#E7C76A" />
      <Globe />
    </Canvas>
  );
}
