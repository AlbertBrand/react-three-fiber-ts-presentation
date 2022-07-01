import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { OrbitControls } from "@react-three/drei";
import { Plane } from "./components/Plane";
import { Cube } from "./components/Cube";

export function PhysicsScene() {
  const [count, setCount] = useState(0);
  const cubes = [];
  for (let i = 0; i < count; i++) {
    cubes.push(<Cube key={i} position={[Math.cos(i) / 2, 5, 0]} />);
  }
  return (
    <Canvas
      resize={{ offsetSize: true }}
      shadows
      camera={{ position: [-5, 5, 5], fov: 50 }}
      onClick={() => setCount(count + 1)}
    >
      <ambientLight />
      <spotLight
        angle={0.25}
        penumbra={0.5}
        position={[10, 10, 5]}
        castShadow
      />
      <Physics>
        <Plane />
        {cubes}
      </Physics>
      <OrbitControls />
    </Canvas>
  );
}
