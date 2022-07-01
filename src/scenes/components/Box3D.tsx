import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export function Box3D(props: JSX.IntrinsicElements["mesh"]) {
  const ref = useRef<Mesh>(null!);
  const [hovered, hover] = useState(false);
  const [rotation, rotate] = useState(0);
  useFrame(() => (ref.current.rotation.x += rotation));
  return (
    <mesh
      {...props}
      ref={ref}
      onPointerOver={() => {
        hover(true);
        rotate(0.01);
      }}
      onPointerOut={() => hover(false)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? "yellow" : "red"} />
    </mesh>
  );
}
