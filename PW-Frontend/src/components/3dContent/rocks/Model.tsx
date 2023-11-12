import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useFrame, useThree } from "@react-three/fiber";

type GLTFResult = GLTF & {
  nodes: {
    Rock_1: THREE.Mesh;
  };
  materials: {
    Rock_1: THREE.MeshStandardMaterial;
  };
};

const Model: React.FC<JSX.IntrinsicElements["group"]> = React.memo((props) => {
  const { nodes, materials } = useMemo(() => {
    return useGLTF("/rock_2.glb") as GLTFResult;
  }, []);

  const { viewport } = useThree();
  const aspect = viewport.width / viewport.height;

  // Check if it's a mobile device based on viewport width
  // const isMobile = viewport.width < 768;

  // Calculate a scale factor based on the viewport size
  const scaleFactor = useMemo(() => {
    // Adjust this value based on your needs
    const baseScale = 1;
    const scale = Math.min(1, aspect) * baseScale;
    return scale;
  }, [aspect]);

  const positionFactor = useMemo(() => {
    const basePosition = new THREE.Vector3(0, 0.2, -5);
    return aspect > 1
      ? basePosition
      : new THREE.Vector3(basePosition.x, basePosition.y - 0.2, basePosition.z);
  }, [aspect]);

  const [prevScrollPos, setPrevScrollPos] = useState<number>(window.scrollY);
  const [scrollDirection, setScrollDirection] = useState<
    "up" | "down" | "none"
  >("none");

  const meshRef = useRef<THREE.Group>(null!);
  const meshRock1 = useRef<THREE.Mesh>(null!);
  const meshRock2 = useRef<THREE.Mesh>(null!);
  const meshRock3 = useRef<THREE.Mesh>(null!);
  const meshRock4 = useRef<THREE.Mesh>(null!);
  const meshRock5 = useRef<THREE.Mesh>(null!);
  const meshRock6 = useRef<THREE.Mesh>(null!);
  const meshRocks = [
    meshRock1,
    meshRock2,
    meshRock3,
    meshRock4,
    meshRock5,
    meshRock6,
  ];

  useEffect(() => {
    // if (!isMobile) {
    // }
    window.addEventListener("scroll", handleScroll);

    if (scrollDirection === "up") {
      meshRef.current.rotation.y += 0.006;
      meshRocks.forEach((meshRock) => {
        meshRock.current.rotation.x += 0.04;
      });
    } else if (scrollDirection === "down") {
      meshRef.current.rotation.y -= 0.006;
      meshRocks.forEach((meshRock) => {
        meshRock.current.rotation.x -= 0.04;
      });
    }

    return () => {
      // if (!isMobile) {
      // }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;

    if (currentScrollPos > prevScrollPos) {
      setScrollDirection("down");
    } else if (currentScrollPos < prevScrollPos) {
      setScrollDirection("up");
    }

    setPrevScrollPos(currentScrollPos);
  };

  const updateRockPosition = useCallback(() => {
    meshRef.current.rotation.y += 0.0005;

    meshRock1.current.rotation.y -= 0.0008;
    meshRock1.current.rotation.x -= 0.0007;
    meshRock1.current.rotation.z += 0.0008;

    meshRock2.current.rotation.y -= 0.0008;
    meshRock2.current.rotation.x += 0.0003;
    meshRock2.current.rotation.z += 0.0004;

    meshRock3.current.rotation.y += 0.0005;
    meshRock3.current.rotation.x -= 0.0006;
    meshRock3.current.rotation.z += 0.0008;

    meshRock4.current.rotation.y += 0.0003;
    meshRock4.current.rotation.x += 0.0006;
    meshRock4.current.rotation.z -= 0.0005;

    meshRock5.current.rotation.y -= 0.0004;
    meshRock5.current.rotation.x += 0.0007;
    meshRock5.current.rotation.z -= 0.0006;

    meshRock6.current.rotation.y += 0.0007;
    meshRock6.current.rotation.x -= 0.0006;
    meshRock6.current.rotation.z += 0.0005;
  }, []);

  useFrame(() => {
    updateRockPosition();
  });

  return (
    <group
      {...props}
      dispose={null}
      ref={meshRef}
      position={positionFactor}
      rotation={[0.35, 0, 0]}
      scale={scaleFactor}
    >
      <mesh
        ref={meshRock1}
        name="Rock_1"
        position={[-1, 0, 3]}
        castShadow
        receiveShadow
        geometry={nodes.Rock_1.geometry}
        material={materials.Rock_1}
        scale={0.035}
      />
      <mesh
        ref={meshRock2}
        name="Rock_2"
        position={[1, 0, -3]}
        castShadow
        receiveShadow
        geometry={nodes.Rock_1.geometry}
        material={materials.Rock_1}
        scale={0.035}
      />
      <mesh
        ref={meshRock3}
        name="Rock_3"
        position={[3, 0, -1]}
        castShadow
        receiveShadow
        geometry={nodes.Rock_1.geometry}
        material={materials.Rock_1}
        scale={0.03}
      />
      <mesh
        ref={meshRock4}
        name="Rock_4"
        position={[-3, 0, 1]}
        castShadow
        receiveShadow
        geometry={nodes.Rock_1.geometry}
        material={materials.Rock_1}
        scale={0.03}
      />
      <mesh
        ref={meshRock5}
        name="Rock_5"
        position={[2, 0, 2]}
        castShadow
        receiveShadow
        geometry={nodes.Rock_1.geometry}
        material={materials.Rock_1}
        scale={0.03}
      />
      <mesh
        ref={meshRock6}
        name="Rock_6"
        position={[-2, 0, -2]}
        castShadow
        receiveShadow
        geometry={nodes.Rock_1.geometry}
        material={materials.Rock_1}
        scale={0.035}
      />
    </group>
  );
});

useGLTF.preload("/rock_2.glb");

export default Model;
