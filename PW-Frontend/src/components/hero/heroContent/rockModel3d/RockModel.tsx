import { Canvas } from "@react-three/fiber";
// import Rock from "./Rock";
import { Suspense, lazy, useState } from "react";
import { Loader, PerformanceMonitor } from "@react-three/drei";
// import { Stats } from "@react-three/drei";
// import { Perf } from "r3f-perf";

const Rock = lazy(() => import("./Rock"));

const RockModel = () => {
  const [dpr, setDpr] = useState(0.6);
  return (
    <div className="h-full w-full z-[100] absolute pointer-events-none">
      <Canvas
        // shadows
        camera={{ position: [-2, 2, 6], fov: 50, near: 1, far: 20 }}
        // performance={{ min: 0.5 }}
        dpr={dpr}
      >
        {/* <fog attach="fog" args={["#202020", 5, 20]} /> */}
        {/* <ambientLight intensity={0.015} /> */}
        {/* <OrbitControls /> */}
        {/* <Perf /> */}
        {/* <Stats /> */}
        <PerformanceMonitor
          onIncline={() => setDpr(1)}
          onDecline={() => setDpr(0.4)}
        />
        <Suspense fallback={null}>
          <Rock />
        </Suspense>
      </Canvas>
      <Loader />
    </div>
  );
};

export default RockModel;
