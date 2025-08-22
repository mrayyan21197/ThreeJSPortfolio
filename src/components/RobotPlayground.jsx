import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "motion/react";
import { useFrame } from "@react-three/fiber";

export function RobotPlayground(props) {
  const group = useRef();
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const { nodes, materials, animations, scene } = useGLTF("/models/robot_playground.glb");
  const { actions } = useAnimations(animations, group);
  
  // Enhanced performance optimization with more interactive values
  const yPosition = useMotionValue(2);
  const ySpring = useSpring(yPosition, { damping: 30, stiffness: 100 });
  const hoverScale = useSpring(isHovered ? 1.3 : 1, { damping: 20 });
  const clickScale = useSpring(isClicked ? 0.9 : 1, { damping: 15 });
  const dragScale = useSpring(isDragging ? 1.1 : 1, { damping: 25 });
  
  // New interactive values
  const rotationSpeed = useSpring(isHovered ? 0.02 : 0.005, { damping: 15 });
  const bounceHeight = useSpring(isClicked ? 0.5 : 0, { damping: 20 });
  const colorIntensity = useSpring(isHovered ? 1.5 : 1, { damping: 10 });
  
  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);
  
  useEffect(() => {
    ySpring.set(0);
  }, [ySpring]);
  
  useFrame((state) => {
    if (group.current) {
      // Enhanced floating animation with bounce
      const baseY = ySpring.get();
      const bounceOffset = bounceHeight.get();
      group.current.position.y = baseY + Math.sin(state.clock.elapsedTime * 3) * 0.1 + bounceOffset;
      
      // Dynamic rotation based on hover state
      const baseRotation = 0.003;
      const hoverRotation = rotationSpeed.get();
      const mouseInfluence = state.mouse.x * 0.02;
      group.current.rotation.y += baseRotation + hoverRotation + mouseInfluence;
      
      // Add some gentle swaying
      group.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.05;
      
      // Apply all scale effects
      const baseScale = props.scale || 2.5;
      const finalScale = baseScale * hoverScale.get() * clickScale.get() * dragScale.get();
      group.current.scale.setScalar(finalScale);
      
      
      // Add subtle color animation on hover
      if (materials && Object.keys(materials).length > 0) {
        const material = Object.values(materials)[0];
        if (material && material.color) {
          const intensity = colorIntensity.get();
          material.color.setRGB(1 * intensity, 1 * intensity, 1 * intensity);
        }
      }
    }
  });
  
  // Enhanced mouse event handlers
  const handlePointerOver = () => {
    setIsHovered(true);
    // Add a little bounce effect
    ySpring.set(0.3);
  };
  
  const handlePointerOut = () => {
    setIsHovered(false);
    ySpring.set(0);
  };
  
  const handlePointerDown = () => {
    setIsClicked(true);
    // Add a downward bounce
    ySpring.set(-0.2);
  };
  
  const handlePointerUp = () => {
    setIsClicked(false);
    ySpring.set(0);
  };
  
  const handlePointerMove = (event) => {
    if (isClicked) {
      // Allow dragging when clicked
      setIsDragging(true);
      // Add some rotation based on mouse movement
      if (group.current) {
        group.current.rotation.x += event.movementY * 0.01;
        group.current.rotation.y += event.movementX * 0.01;
      }
    }
  };
  
  const handlePointerLeave = () => {
    setIsDragging(false);
    setIsClicked(false);
    setIsHovered(false);
    ySpring.set(0);
  };
  
  // Check if we have a valid scene or nodes
  if (!scene && !nodes) {
    console.warn("RobotPlayground: No valid 3D model data found");
    // Return a placeholder cube instead of null
    return (
      <mesh 
        position={props.position || [0, 0, 0]} 
        scale={props.scale || 2.5}
        onPointerOver={handlePointerOver}
        onPointerOut={handlePointerOut}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
      >
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#888888" />
      </mesh>
    );
  }

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, 0, 0]}
      scale={props.scale || 2.5}
      position={props.position || [0, 0, 0]}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      {/* Try to render the scene directly first */}
      {scene ? (
        <primitive object={scene} />
      ) : (
        /* Fallback: try to render individual nodes if they exist */
        Object.keys(nodes).map((nodeName) => {
          const node = nodes[nodeName];
          if (node && node.geometry) {
            return (
              <mesh key={nodeName} geometry={node.geometry}>
                <meshStandardMaterial color="#888888" />
              </mesh>
            );
          }
          return null;
        })
      )}
    </group>
  );
}

useGLTF.preload("/models/robot_playground.glb");
