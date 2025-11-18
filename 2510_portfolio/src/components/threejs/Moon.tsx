/**
 * components/threejs
 * Moon.tsx
**/

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";
import { useTexture } from "@react-three/drei";

const Moon = () => {
  const moonRef = useRef<Mesh>(null);
  const moonTexture = useTexture("/assets/images/home/moon_bg.jpg");// 달 이미지 씌우기

  // useFrame으로 프레임마다 회전시키기
  useFrame(() => {
    if (moonRef.current) {
      moonRef.current.rotation.y += 0.002;// y축 회전 각도 조금씩 증가
    }
  });

  return (
    <mesh ref={moonRef}>
      {/* sphereGeometry: 구체 생성, args: 반지름, 곡선수(높을수록 둥근 구) */}
      <sphereGeometry args={[1.5, 32, 32]} />

      {/* meshStandardMaterial: 빛 반사를 계산하는 빛 반응형 머티리얼 */}
      <meshStandardMaterial map={moonTexture} roughness={0.2}/>
      <ambientLight intensity={6} />
    </mesh>
  );
};

export default Moon;