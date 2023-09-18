import {
  OrbitControls,
  PerspectiveCamera,
  useGLTF,
  useAnimations,
} from "@react-three/drei";
import { useEffect, useRef } from "react";

const Content = () => {
  const group = useRef();
  const { scene, animations } = useGLTF("./code-editor.gltf");
  const { actions } = useAnimations(animations, group);
  const listActions: string[] = Object.keys(actions);

  for (let i = 0; i < listActions.length; i++) {
    console.log(listActions[i]);
  }

  useEffect(() => {
    for (let i = 0; i < listActions.length; i++) {
      console.log(listActions[i]);
      const action = actions[listActions[i]];
      if (action) action.play();
    }
  }, [listActions, actions]);

  return (
    <>
      <PerspectiveCamera position={[0, 0, 5]} makeDefault />
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} autoRotate={false} />
      <primitive
        ref={group}
        object={scene}
        dispose={null}
        position={[0, -1.2, -1]}
        rotation={[0, 0, 0]}
        scale={[1, 1, 1]}
      />
    </>
  );
};

useGLTF.preload("/code-editor.gltf");

export default Content;
