import { Canvas } from "@react-three/fiber";
import { Sky, OrbitControls } from "@react-three/drei";
import { Ocean } from "./components/Ocean";

export const OceanScene = () => (
  <Canvas
    resize={{ offsetSize: true }}
    camera={{ position: [0, 10, 500], fov: 30 }}
  >
    <ambientLight intensity={0.1} />
    <directionalLight color="white" position={[0, 0, 5]} />
    <Sky sunPosition={[0, 4, -20]} turbidity={2} />
    <Ocean />
    <OrbitControls maxDistance={500} maxPolarAngle={Math.PI / 2 - 0.01} />
  </Canvas>
);
