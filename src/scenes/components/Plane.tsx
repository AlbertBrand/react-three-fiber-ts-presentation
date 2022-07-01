import { Mesh } from "three";
import { PlaneProps } from "@react-three/cannon";
import { useRef } from "react";
import { usePlane } from "@react-three/cannon";

export function Plane(props: PlaneProps) {
  const [ref] = usePlane(
    () => ({ rotation: [-Math.PI / 2, 0, 0], ...props }),
    useRef<Mesh>(null)
  );
  return (
    <mesh receiveShadow ref={ref}>
      <planeGeometry args={[1000, 1000]} />
      <meshStandardMaterial color="#f0f0f0" />
    </mesh>
  );
}
