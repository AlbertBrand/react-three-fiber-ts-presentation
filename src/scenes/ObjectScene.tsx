import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Objects } from "./components/Objects";
import { Suspense } from "react";

export const ObjectScene = () => {
  return (
    <Suspense>
      <Canvas
        orthographic
        camera={{ zoom: 50, position: [0, 0, 100] }}
        resize={{ offsetSize: true }}
      >
        <ambientLight intensity={0.1} />
        <directionalLight color="white" position={[0, 0, 5]} />
        <Objects />
        <OrbitControls />
      </Canvas>
    </Suspense>
  );
};
