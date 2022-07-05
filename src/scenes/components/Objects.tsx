import { meshTurnRef } from "./meshTurnRef";

function TurnMesh(props: JSX.IntrinsicElements["mesh"]) {
  const meshTurn = meshTurnRef();
  return (
    <mesh {...props} ref={meshTurn}>
      {props.children}
      <meshPhysicalMaterial color={"#FFFF00"} roughness={0.1} metalness={0.4} />
    </mesh>
  );
}

export function Objects() {
  return (
    <>
      <TurnMesh position={[-6, 0, 0]} scale={0.5}>
        <cylinderBufferGeometry args={[1, 1, 5, 50]} />
      </TurnMesh>
      <TurnMesh position={[-3, 0, 0]} scale={0.5}>
        <dodecahedronGeometry args={[2, 0]} />
      </TurnMesh>
      <TurnMesh position={[0, 0, 0]} scale={0.5}>
        <sphereGeometry args={[2, 50, 50]} />
      </TurnMesh>
      <TurnMesh position={[3, 0, 0]} scale={0.5}>
        <torusGeometry args={[2, 0.5, 20, 20]} />
      </TurnMesh>
      <TurnMesh position={[6, 0, 0]} scale={0.5}>
        <capsuleGeometry args={[1, 2, 20, 20]} />
      </TurnMesh>
    </>
  );
}
