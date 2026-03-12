"use client";

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { HeroScene } from "./HeroScene";

export function HeroCanvas() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <Canvas
        dpr={[1, 1.6]}
        camera={{ position: [0, 0, 4] }}
        gl={{ antialias: true, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <HeroScene />
        </Suspense>
      </Canvas>
    </div>
  );
}
