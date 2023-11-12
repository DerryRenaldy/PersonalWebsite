import { Canvas } from "@react-three/fiber";
import Rock from "./Rock";
// import { Stats } from "@react-three/drei";
// import { Perf } from "r3f-perf";

const RockModel = () => {
  return (
    <div className="h-full w-full z-[100] absolute pointer-events-none">
      <Canvas
        // shadows
        camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
        // performance={{ min: 0.5 }}
        // dpr={dpr}
      >
        {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
        {/* <ambientLight intensity={0.015} /> */}
        {/* <OrbitControls /> */}
        {/* <PerformanceMonitor
          onIncline={() => setDpr(2)}
          onDecline={() => setDpr(1)}
        /> */}
        {/* <Perf /> */}
        {/* <Stats /> */}
        <Rock />
      </Canvas>
    </div>
  );
};

export default RockModel;
