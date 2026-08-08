"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * Builds a pointed Islamic arch (two-centered / ogee-ish) as a 2D shape,
 * then extrudes it into a slim architectural frame.
 */
function buildArchShape(width: number, height: number, thickness: number) {
  const outer = new THREE.Shape();
  const halfW = width / 2;
  const springHeight = height * 0.55;

  outer.moveTo(-halfW, 0);
  outer.lineTo(-halfW, springHeight);
  outer.quadraticCurveTo(-halfW, height * 0.92, 0, height);
  outer.quadraticCurveTo(halfW, height * 0.92, halfW, springHeight);
  outer.lineTo(halfW, 0);
  outer.lineTo(halfW - thickness, 0);
  outer.lineTo(halfW - thickness, springHeight);
  outer.quadraticCurveTo(
    halfW - thickness,
    height * 0.86,
    0,
    height - thickness * 1.6
  );
  outer.quadraticCurveTo(
    -(halfW - thickness),
    height * 0.86,
    -(halfW - thickness),
    springHeight
  );
  outer.lineTo(-(halfW - thickness), 0);
  outer.closePath();

  return outer;
}

function ArchFrame() {
  const shape = useMemo(() => buildArchShape(4.6, 6, 0.32), []);
  const geometry = useMemo(
    () =>
      new THREE.ExtrudeGeometry(shape, {
        depth: 0.5,
        bevelEnabled: true,
        bevelThickness: 0.04,
        bevelSize: 0.03,
        bevelSegments: 2,
        curveSegments: 32,
      }),
    [shape]
  );

  return (
    <mesh geometry={geometry} rotation={[0, 0, 0]} castShadow receiveShadow>
      <meshStandardMaterial
        color="#0B4A36"
        metalness={0.35}
        roughness={0.4}
        emissive="#063B2B"
        emissiveIntensity={0.15}
      />
    </mesh>
  );
}

function GoldTrim() {
  const shape = useMemo(() => buildArchShape(4.68, 6.08, 0.05), []);
  const geometry = useMemo(
    () =>
      new THREE.ExtrudeGeometry(shape, {
        depth: 0.06,
        bevelEnabled: false,
        curveSegments: 32,
      }),
    [shape]
  );
  return (
    <mesh geometry={geometry} position={[0, 0, 0.55]}>
      <meshStandardMaterial
        color="#C9952E"
        metalness={0.8}
        roughness={0.25}
        emissive="#E7C76A"
        emissiveIntensity={0.2}
      />
    </mesh>
  );
}

function Crescent() {
  const ref = useRef<THREE.Mesh>(null);
  const shape = useMemo(() => {
    const s = new THREE.Shape();
    s.absarc(0, 0, 0.55, Math.PI * 0.35, Math.PI * 1.85, false);
    const hole = new THREE.Path();
    hole.absarc(0.18, 0, 0.5, 0, Math.PI * 2, false);
    s.holes.push(hole);
    return s;
  }, []);
  const geometry = useMemo(
    () => new THREE.ExtrudeGeometry(shape, { depth: 0.08, bevelEnabled: false, curveSegments: 24 }),
    [shape]
  );

  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = 4.9 + Math.sin(state.clock.elapsedTime * 0.6) * 0.05;
    }
  });

  return (
    <mesh ref={ref} geometry={geometry} position={[0, 4.9, -1.2]} rotation={[0, 0, -0.15]}>
      <meshStandardMaterial
        color="#E7C76A"
        metalness={0.9}
        roughness={0.15}
        emissive="#E7C76A"
        emissiveIntensity={0.6}
      />
    </mesh>
  );
}

function Particles({ count = 140 }: { count?: number }) {
  const points = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 10;
      arr[i * 3 + 1] = Math.random() * 7;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 6 - 1;
    }
    return arr;
  }, [count]);

  useFrame((state) => {
    if (!points.current) return;
    const t = state.clock.elapsedTime;
    points.current.rotation.y = t * 0.02;
    const posAttr = points.current.geometry.attributes.position as THREE.BufferAttribute;
    for (let i = 0; i < count; i++) {
      const y = posAttr.getY(i);
      posAttr.setY(i, y > 7.2 ? 0 : y + 0.0025);
    }
    posAttr.needsUpdate = true;
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.045}
        color="#E7C76A"
        transparent
        opacity={0.75}
        sizeAttenuation
      />
    </points>
  );
}

function MosqueSilhouette() {
  return (
    <group position={[0, -0.02, -4.5]}>
      {[-3.2, -1.6, 0, 1.6, 3.2].map((x, i) => (
        <mesh key={i} position={[x, 0.9 + (i % 2 === 0 ? 0.3 : 0), 0]}>
          <coneGeometry args={[0.5, 1.6 + (i % 2) * 0.4, 4]} />
          <meshBasicMaterial color="#051f17" />
        </mesh>
      ))}
      <mesh position={[0, 0.35, 0.1]}>
        <boxGeometry args={[6.4, 0.9, 0.4]} />
        <meshBasicMaterial color="#051f17" />
      </mesh>
    </group>
  );
}

function CameraRig({ entered }: { entered: boolean }) {
  const { camera } = useThree();
  const target = useMemo(() => new THREE.Vector3(0, 2.2, entered ? -1.5 : 8), [entered]);
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", handler);
    return () => window.removeEventListener("pointermove", handler);
  }, []);

  useFrame(() => {
    camera.position.lerp(
      new THREE.Vector3(
        mouse.current.x * 0.3,
        2.2 + mouse.current.y * 0.15,
        target.z
      ),
      0.03
    );
    camera.lookAt(0, 2.6, entered ? -6 : 0);
  });
  return null;
}

export default function ArchScene({ entered = false }: { entered?: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 2.2, 8], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      shadows={false}
    >
      <color attach="background" args={["#09251D"]} />
      <fog attach="fog" args={["#09251D", 6, 16]} />
      <ambientLight intensity={0.55} color="#F8F4EA" />
      <directionalLight position={[3, 6, 4]} intensity={1.1} color="#E7C76A" />
      <pointLight position={[0, 3, 3]} intensity={0.6} color="#C9952E" />

      <ArchFrame />
      <GoldTrim />
      <Crescent />
      <Particles />
      <MosqueSilhouette />
      <CameraRig entered={entered} />
    </Canvas>
  );
}
