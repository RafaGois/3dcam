import { AccumulativeShadows, OrbitControls, RandomizedLight, ScrollControls } from "@react-three/drei";
import { Camera } from "./Camera";
export default function Experience() {
  return (
    <>
      <ambientLight intensity={3}/>
      <OrbitControls enableZoom={false} enableRotate={false} enableDamping={false}/>
      {/*<ScrollControls pages={3} damping={0.25}>*/}
        <Camera />
      {/*</ScrollControls>*/}
    </>
  );
}
