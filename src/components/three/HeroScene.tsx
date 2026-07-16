"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sparkles, Stars } from "@react-three/drei";
import * as THREE from "three";
import { useAccentColor } from "@/hooks/useAccentColor";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { getTimeOfDayMood } from "@/lib/getTimeOfDayMood";

interface HeroSceneProps {
  idleFlourish: boolean;
}

const CHASSIS_COLOR = "#1c1c1c";

// A small floating companion "bot" that hovers beside the profile photo:
// its head tracks the visitor's cursor, it blinks, and it waves every so
// often. Built entirely from primitives (no external 3D model/font assets)
// so it stays fast and Turbopack-friendly.
function RobotMascot({
  reducedMotion,
  idleFlourish,
}: {
  reducedMotion: boolean;
  idleFlourish: boolean;
}) {
  const { threeColor } = useAccentColor();
  const groupRef = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Group>(null);
  const armRef = useRef<THREE.Group>(null);
  const visorRef = useRef<THREE.MeshStandardMaterial>(null);
  const antennaRef = useRef<THREE.MeshStandardMaterial>(null);
  const targetLook = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const t = state.clock.elapsedTime;

    // Whole body: gentle idle rotation, faster + bigger when nobody's touched
    // the page in a while (shared idle timer with the DOM cursor mascot).
    if (groupRef.current && !reducedMotion) {
      groupRef.current.rotation.y = Math.sin(t * (idleFlourish ? 0.8 : 0.25)) * (idleFlourish ? 0.5 : 0.15);
    }

    // Head "looks at" the visitor's cursor, clamped to a small natural range.
    if (headRef.current) {
      if (reducedMotion) {
        headRef.current.rotation.set(0, 0, 0);
      } else {
        targetLook.current.x = THREE.MathUtils.lerp(targetLook.current.x, -state.pointer.y * 0.3, 0.06);
        targetLook.current.y = THREE.MathUtils.lerp(targetLook.current.y, state.pointer.x * 0.4, 0.06);
        headRef.current.rotation.x = targetLook.current.x;
        headRef.current.rotation.y = targetLook.current.y;
      }
    }

    // Wave gesture: a short window every ~7s (always-on flourish when idle).
    if (armRef.current) {
      const waveCycle = t % 7;
      const isWaving = idleFlourish || waveCycle < 1.6;
      armRef.current.rotation.z = isWaving && !reducedMotion ? -0.6 + Math.sin(t * 6) * 0.5 : -0.15;
    }

    // Blink: quick dip in visor glow every few seconds.
    if (visorRef.current) {
      const blinkCycle = t % 4;
      const blinking = blinkCycle > 3.85;
      const baseIntensity = idleFlourish ? 3.2 : 2;
      visorRef.current.emissiveIntensity = blinking ? 0.2 : baseIntensity;
    }
    if (antennaRef.current) {
      antennaRef.current.emissiveIntensity = 1.5 + Math.sin(t * 3) * (idleFlourish ? 1.2 : 0.6);
    }
  });

  return (
    <Float speed={reducedMotion ? 0 : 1.5} floatIntensity={reducedMotion ? 0 : 0.8} rotationIntensity={0}>
      <group ref={groupRef} position={[1.5, 1.1, 0.3]} scale={0.5}>
        {/* Head */}
        <group ref={headRef} position={[0, 0.75, 0]}>
          <mesh>
            <sphereGeometry args={[0.55, 24, 24]} />
            <meshStandardMaterial color={CHASSIS_COLOR} metalness={0.6} roughness={0.35} />
          </mesh>
          {/* Visor / face */}
          <mesh position={[0, 0.02, 0.48]}>
            <boxGeometry args={[0.62, 0.22, 0.08]} />
            <meshStandardMaterial
              ref={visorRef}
              color={CHASSIS_COLOR}
              emissive={threeColor}
              emissiveIntensity={2}
              toneMapped={false}
            />
          </mesh>
          {/* Antenna */}
          <mesh position={[0, 0.68, 0]}>
            <cylinderGeometry args={[0.03, 0.03, 0.35, 8]} />
            <meshStandardMaterial color={CHASSIS_COLOR} metalness={0.6} roughness={0.35} />
          </mesh>
          <mesh position={[0, 0.9, 0]}>
            <sphereGeometry args={[0.08, 12, 12]} />
            <meshStandardMaterial
              ref={antennaRef}
              color={CHASSIS_COLOR}
              emissive={threeColor}
              emissiveIntensity={1.5}
              toneMapped={false}
            />
          </mesh>
        </group>

        {/* Body */}
        <mesh position={[0, -0.05, 0]}>
          <capsuleGeometry args={[0.4, 0.55, 8, 16]} />
          <meshStandardMaterial color={CHASSIS_COLOR} metalness={0.5} roughness={0.4} />
        </mesh>

        {/* Chest energy core */}
        <mesh position={[0, -0.05, 0.4]}>
          <sphereGeometry args={[0.16, 24, 24]} />
          <MeshDistortMaterial
            color={threeColor}
            emissive={threeColor}
            emissiveIntensity={1.2}
            distort={reducedMotion ? 0 : 0.4}
            speed={reducedMotion ? 0 : 2}
            toneMapped={false}
          />
        </mesh>

        {/* Waving arm (right side) */}
        <group ref={armRef} position={[0.42, 0.25, 0]}>
          <mesh position={[0.18, -0.15, 0]} rotation={[0, 0, -0.3]}>
            <capsuleGeometry args={[0.08, 0.4, 6, 12]} />
            <meshStandardMaterial color={CHASSIS_COLOR} metalness={0.5} roughness={0.4} />
          </mesh>
        </group>

        {/* Resting arm (left side) */}
        <mesh position={[-0.42, 0.05, 0]} rotation={[0, 0, 0.25]}>
          <capsuleGeometry args={[0.08, 0.4, 6, 12]} />
          <meshStandardMaterial color={CHASSIS_COLOR} metalness={0.5} roughness={0.4} />
        </mesh>

        {/* Hover glow beneath the bot, sells the "floating" feel */}
        <mesh position={[0, -0.55, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <ringGeometry args={[0.08, 0.32, 24]} />
          <meshStandardMaterial
            color={threeColor}
            emissive={threeColor}
            emissiveIntensity={1}
            transparent
            opacity={0.5}
            toneMapped={false}
          />
        </mesh>
      </group>
    </Float>
  );
}

function CosmicField({ reducedMotion }: { reducedMotion: boolean }) {
  const { threeColor } = useAccentColor();
  const starsRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (starsRef.current && !reducedMotion) {
      starsRef.current.rotation.y += delta * 0.015;
    }
  });

  return (
    <group ref={starsRef}>
      <Stars
        radius={30}
        depth={35}
        count={reducedMotion ? 200 : 700}
        factor={2.5}
        saturation={0}
        fade
        speed={reducedMotion ? 0 : 0.4}
      />
      <Sparkles
        count={reducedMotion ? 0 : 35}
        color={threeColor}
        size={2.5}
        speed={reducedMotion ? 0 : 0.3}
        scale={[3.5, 3.5, 3.5]}
        position={[1.5, 1.1, 0.3]}
      />
    </group>
  );
}

function SceneLighting({ idleFlourish }: { idleFlourish: boolean }) {
  const { threeColor } = useAccentColor();
  const [mood, setMood] = useState(() => getTimeOfDayMood(new Date().getHours()));
  const lightRef = useRef<THREE.PointLight>(null);

  useEffect(() => {
    setMood(getTimeOfDayMood(new Date().getHours()));
  }, []);

  useFrame(() => {
    if (!lightRef.current) return;
    const boost = idleFlourish ? 0.3 : 0;
    lightRef.current.intensity = THREE.MathUtils.lerp(
      lightRef.current.intensity,
      mood.lightIntensity + boost,
      0.05,
    );
  });

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight ref={lightRef} color={threeColor} position={[2.5, 2, 3]} intensity={mood.lightIntensity} />
      <pointLight color="#ffffff" position={[-2, -1, 2]} intensity={0.3} />
    </>
  );
}

function SceneContents({ idleFlourish }: HeroSceneProps) {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <>
      <SceneLighting idleFlourish={idleFlourish} />
      <CosmicField reducedMotion={reducedMotion} />
      <RobotMascot reducedMotion={reducedMotion} idleFlourish={idleFlourish} />
    </>
  );
}

// Pauses rendering once the Hero section scrolls out of view (the
// requestAnimationFrame loop is also auto-throttled by the browser when the
// tab is backgrounded, so no separate Page Visibility handling is needed).
function useIsInView(ref: React.RefObject<HTMLElement | null>) {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => setIsInView(entry.isIntersecting), {
      threshold: 0.1,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, [ref]);

  return isInView;
}

export default function HeroScene({ idleFlourish }: HeroSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useIsInView(containerRef);

  return (
    <div ref={containerRef} className="absolute -inset-10 sm:-inset-14 lg:-inset-20 pointer-events-none">
      {isInView && (
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 45 }}
          gl={{ antialias: true, alpha: true }}
          dpr={[1, 2]}
        >
          <SceneContents idleFlourish={idleFlourish} />
        </Canvas>
      )}
    </div>
  );
}
