import { a, config, useSpring } from "@react-spring/three";
import { useState } from "react";

export function BoxGrid(props: JSX.IntrinsicElements["mesh"] & { delay: number }) {
  const [flip, set] = useState(false)
  const rotateZ = (Math.random() - 0.5) * 0.1
  const toPosition = [...props.position as number[]]
  toPosition[1] += 3;
  const animProps = useSpring({
    reset: true,
    reverse: flip,
    from: { rotation: [0, 0, rotateZ], position: props.position },
    to: { rotation: [0, Math.PI * Math.random(), rotateZ], position: toPosition },
    delay: props.delay,
    config: {
      ...config.gentle, mass: 2
    },
    onRest: () => set(!flip),
  })
  return (
    // @ts-ignore 
    <a.mesh {...props} {...animProps}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="#888" />
    </a.mesh>
  );
}
