import { PerspectiveCamera } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import Model from "components/3dContent/rocks/Model";
import React, { useCallback, useRef } from "react";
import * as THREE from "three";

// const Model = lazy(() => import("components/3dContent/rocks/Model"));

const Rock = React.memo(() => {
  const lightPosition = new THREE.Vector3();
  const pointLightRef = useRef<THREE.PointLight>(null!);
  // const movingLight = useRef<THREE.PointLight>(null!);
  // const spotLightRef = useRef<THREE.SpotLight>(null!);
  // const rectAreaLighStayRef = useRef<THREE.RectAreaLight>(null!);
  const rectAreaLighRef = useRef<THREE.RectAreaLight>(null!);

  // useHelper(pointLightRef, THREE.PointLightHelper);
  // useHelper(movingLight, THREE.PointLightHelper);
  // useHelper(spotLightRef, THREE.SpotLightHelper);
  // useHelper(rectAreaLighRef, RectAreaLightHelper, "red");

  //   const { intensity, width, height, color } = useControls({
  //     intensity: { value: 1, min: 0, max: 20 },
  //     width: { value: 3, min: 1, max: 10 },
  //     height: { value: 3, min: 1, max: 10 },
  //     color: "#fff",
  //   });

  // const depthBuffer = useDepthBuffer({ frames: 1 });
  const viewport = useThree((state) => state.viewport);

  const updateLightPosition = useCallback(
    (state: { mouse: { y: number; x: number } }) => {
      let z = -(state.mouse.y * viewport.height) / 2 - 2;

      rectAreaLighRef.current.position.lerp(
        lightPosition.set(
          (state.mouse.x * viewport.width) / 2,
          (state.mouse.y * viewport.height) / 2 + 0.8,
          z
        ),
        0.1
      );

      // console.log("X : ", (state.mouse.x * viewport.width) / 2);
      // console.log("Y : ", (state.mouse.y * viewport.height) / 2);
      // console.log("Z : ", (state.mouse.y * viewport.height) / 2);
      rectAreaLighRef.current.updateMatrixWorld();
    },
    []
  );

  useFrame((state) => {
    updateLightPosition(state);
  });

  return (
    <>
      <PerspectiveCamera position={[0, 0, 5]} makeDefault />
      <rectAreaLight
        ref={rectAreaLighRef}
        rotation={[-Math.PI / 2.5, 0, 0]}
        // position={[0, 4, -4]}
        width={2}
        height={2}
        intensity={20}
      />
      <pointLight ref={pointLightRef} position={[0, 3, -2]} intensity={3.2} />
      <Model />
      {/* <rectAreaLight
        ref={rectAreaLighStayRef}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 4, -4]}
        width={10}
        height={10}
        intensity={4}
      /> */}
      {/* <pointLight
        ref={movingLight}
        intensity={1.5}
        scale={0.1}
        decay={1}
        color="#fff"
      /> */}
      {/* <spotLight
        ref={spotLightRef}
        position={[0, 2, 2]}
        angle={0.9}
        penumbra={1.2}
        distance={15}
        intensity={10}
      /> */}
    </>
  );
});

export default Rock;
