import { Canvas } from "@react-three/fiber";
import { OrbitControls, BakeShadows, ContactShadows } from "@react-three/drei";
import { Porsche } from "./components/Porsche";

export const ModelScene = () => (
  <Canvas
    resize={{ offsetSize: true }}
    camera={{ position: [-10, 0, 15], fov: 30 }}
  >
    <Porsche
      scale={1.6}
      position={[-0.5, -0.18, 0]}
      rotation={[0, Math.PI / 5, 0]}
    />
    <spotLight
      position={[0, 15, 0]}
      angle={0.3}
      penumbra={1}
      castShadow
      intensity={2}
      shadow-bias={-0.0001}
    />
    <ambientLight intensity={0.2} />
    <ContactShadows
      resolution={1024}
      frames={1}
      position={[0, -1.16, 0]}
      scale={10}
      blur={3}
      opacity={1}
      far={10}
    />
    <BakeShadows />
    <OrbitControls />
  </Canvas>
);
