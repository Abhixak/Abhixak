"use client";

import { Float, MeshDistortMaterial, OrbitControls, Sphere, Text } from "@react-three/drei";
import type { ComponentProps } from "react";
import { AdditiveBlending } from "three";

const orbitNodes = [
  { position: [1.8, 0.4, 0.6], color: "#f7c06a", label: "JavaScript" },
  { position: [-1.6, 0.8, -0.2], color: "#f08a24", label: "React Native" },
  { position: [0.6, -1.6, 0.3], color: "#f5a356", label: "Next.js" },
  { position: [-0.4, -1.1, 1.4], color: "#f4b36f", label: "MERN" },
  { position: [-0.2, 1.4, 1.1], color: "#f3a95f", label: "Software Architecture" },
];

type GroupProps = ComponentProps<"group">;

export function HeroScene(props: GroupProps) {
  return (
    <group {...props}>
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 6, 4]} intensity={1.5} />
      <pointLight position={[-3, 1, 3]} intensity={0.85} color="#f08a24" />
      <Float speed={1.4} rotationIntensity={0.7} floatIntensity={1.4}>
        <Sphere args={[1.2, 64, 64]}>
          <MeshDistortMaterial
            color="#f08a24"
            emissive="#f08a24"
            emissiveIntensity={0.95}
            roughness={0.05}
            metalness={0.35}
            distort={0.3}
            speed={2}
          />
        </Sphere>
        <Sphere args={[1.35, 64, 64]}>
          <meshBasicMaterial
            color="#f08a24"
            transparent
            opacity={0.22}
            blending={AdditiveBlending}
          />
        </Sphere>
        <Sphere args={[1.6, 64, 64]}>
          <meshBasicMaterial
            color="#f7c06a"
            transparent
            opacity={0.12}
            blending={AdditiveBlending}
          />
        </Sphere>
      </Float>
      {orbitNodes.map((node, index) => (
        <Float
          key={index}
          speed={2 + index * 0.6}
          rotationIntensity={1.2}
          floatIntensity={1.8}
        >
          <mesh position={node.position as [number, number, number]}>
            <icosahedronGeometry args={[0.18, 0]} />
            <meshStandardMaterial color={node.color} emissive={node.color} emissiveIntensity={1} />
          </mesh>
          <Text
            position={[
              (node.position[0] as number) + 0.32,
              (node.position[1] as number) + 0.08,
              (node.position[2] as number),
            ]}
            fontSize={0.14}
            color="#fff3e6"
            anchorX="left"
            anchorY="middle"
            outlineColor="rgba(0,0,0,0.45)"
            outlineWidth={0.015}
          >
            {node.label}
          </Text>
        </Float>
      ))}
      <OrbitControls enablePan={false} enableZoom={false} autoRotate autoRotateSpeed={1.2} />
    </group>
  );
}
