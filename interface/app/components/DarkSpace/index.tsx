import { FunctionComponent, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { PointMaterial, Points, Trail } from "@react-three/drei";
import { inSphere as randomInSphere } from "maath/random";
import { Color, type Mesh } from "three";

const Stars = () => {
  const ref = useRef<Mesh>();
  const [sphere] = useState(() =>
    randomInSphere(new Float32Array(35000), { radius: 1 })
  );
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 100;
      ref.current.rotation.y -= delta / 100;
    }
  });
  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.001}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

function ShootingStar() {
  const ref = useRef<any>();
  useFrame((state) => {
    const t = state.clock.getElapsedTime() * 0.5;
    if (ref.current) {
      ref.current.position.set(
        Math.sin(t) * 4,
        Math.atan(t) * Math.cos(t / 2) * 2,
        Math.cos(t) * 4
      );
    }
  });
  return (
    <Trail
      width={0.05}
      length={8}
      color={new Color(2, 1, 10)}
      attenuation={(t) => t * t}
    >
      <mesh ref={ref}>
        <sphereGeometry args={[0.005]} />
        <meshBasicMaterial color={[10, 1, 10]} toneMapped={false} />
      </mesh>
    </Trail>
  );
}

export const DarkSpace: FunctionComponent = () => {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <Canvas camera={{ position: [0, 0, 0] }}>
        <ShootingStar />
        <ShootingStar />
        <Stars />
      </Canvas>
    </div>
  );
};
