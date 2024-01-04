import { useRef, useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import * as THREE from "three";

export function Girl(props) {
  const group = useRef();
  const {
    nodes,
    materials: originalMaterials,
    animations,
  } = useGLTF("/FallingGirl.glb");
  const { actions } = useAnimations(animations, group);
  const zPlane = new THREE.Plane(new THREE.Vector3(0, 0, 1), 0);
  const yPlane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 1);

  const materials = props.clip
    ? Object.fromEntries(
        Object.entries(originalMaterials).map(([key, material]) => [
          key,
          material.clone(),
        ])
      )
    : originalMaterials;

  materials.hair.clippingPlanes = props.clip ? [yPlane, zPlane] : null;
  materials.skin.clippingPlanes = props.clip ? [yPlane, zPlane] : null;
  materials.pants.clippingPlanes = props.clip ? [yPlane, zPlane] : null;
  materials["pants.001"].clippingPlanes = props.clip ? [yPlane, zPlane] : null;
  materials.yellow.clippingPlanes = props.clip ? [yPlane, zPlane] : null;
  materials["red.001"].clippingPlanes = props.clip ? [yPlane, zPlane] : null;

  useEffect(() => {
    console.log(actions);
    actions.falling.play();
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group name="Cube004" position={[0, 3.241, 0]} scale={0.307} />
        <group
          name="Empty"
          position={[1.057, 1.988, -2.037]}
          rotation={[Math.PI / 2, 0, 0]}
        />
        <group
          name="Empty001"
          position={[-2.035, 1.988, 1.057]}
          rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        />
        <group name="Armature" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group name="Cube">
            <skinnedMesh
              name="Cube006"
              side={THREE.DoubleSide}
              geometry={nodes.Cube006.geometry}
              material={materials.yellow}
              skeleton={nodes.Cube006.skeleton}
            />
            <skinnedMesh
              side={THREE.DoubleSide}
              name="Cube006_1"
              geometry={nodes.Cube006_1.geometry}
              material={materials["red.001"]}
              skeleton={nodes.Cube006_1.skeleton}
            />
          </group>
          <group name="Cube001">
            <skinnedMesh
              side={THREE.DoubleSide}
              name="Cube007"
              geometry={nodes.Cube007.geometry}
              material={materials.yellow}
              skeleton={nodes.Cube007.skeleton}
            />
            <skinnedMesh
              side={THREE.DoubleSide}
              name="Cube007_1"
              geometry={nodes.Cube007_1.geometry}
              material={materials["red.001"]}
              skeleton={nodes.Cube007_1.skeleton}
            />
            <skinnedMesh
              side={THREE.DoubleSide}
              name="Cube007_2"
              geometry={nodes.Cube007_2.geometry}
              material={materials.skin}
              skeleton={nodes.Cube007_2.skeleton}
            />
          </group>
          <skinnedMesh
            side={THREE.DoubleSide}
            name="Cube002"
            geometry={nodes.Cube002.geometry}
            material={materials.skin}
            skeleton={nodes.Cube002.skeleton}
          />
          <skinnedMesh
            side={THREE.DoubleSide}
            name="Cube003"
            geometry={nodes.Cube003.geometry}
            material={materials.skin}
            skeleton={nodes.Cube003.skeleton}
          />
          <skinnedMesh
            side={THREE.DoubleSide}
            name="Cube005"
            geometry={nodes.Cube005.geometry}
            material={materials.hair}
            skeleton={nodes.Cube005.skeleton}
          />
          <group name="Cylinder">
            <skinnedMesh
              side={THREE.DoubleSide}
              name="Cylinder001_1"
              geometry={nodes.Cylinder001_1.geometry}
              material={materials.pants}
              skeleton={nodes.Cylinder001_1.skeleton}
            />

            <skinnedMesh
              side={THREE.DoubleSide}
              name="Cylinder001_3"
              geometry={nodes.Cylinder001_3.geometry}
              material={materials.skin}
              skeleton={nodes.Cylinder001_3.skeleton}
            />
          </group>
          <skinnedMesh
            side={THREE.DoubleSide}
            name="Cylinder001"
            geometry={nodes.Cylinder001.geometry}
            material={materials.skin}
            skeleton={nodes.Cylinder001.skeleton}
          />
          <primitive object={nodes.mixamorigHips} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/FallingGirl.glb");
