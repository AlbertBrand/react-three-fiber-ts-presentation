import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

export function Knot() {
  const knotRef = useRef<Mesh>(null!);
  useFrame(() => {
    knotRef.current.rotation.y += -0.01;
  });
  return (
    <mesh ref={knotRef}>
      <torusKnotGeometry args={[4, 1, 256, 64]} />
      <meshPhysicalMaterial color={"#FFFF00"} roughness={0.1} metalness={0.4} />
    </mesh>
  );
}
