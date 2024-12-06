import React, { useRef, useEffect } from "react";
import { PositionalAudio, Sphere } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const SoundComponent = ({ url, position, maxDistance = 100, refDistance = 10, rolloffFactor = 1, volume = 1, showHelper = false, helperScale = [1, 1, 1] }) => {
  const soundRef = useRef();

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.setRefDistance(refDistance);
      soundRef.current.setDistanceModel("linear");
      soundRef.current.setMaxDistance(maxDistance);
      soundRef.current.setRolloffFactor(rolloffFactor);
      soundRef.current.setVolume(volume);
    }
  }, [maxDistance, refDistance, rolloffFactor, volume]);

  useFrame(({ camera }) => {
    if (soundRef.current) {
      const distance = camera.position.distanceTo(soundRef.current.position);
      if (distance <= maxDistance) {
        if (!soundRef.current.isPlaying) {
          soundRef.current.play();
        }
      } else {
        if (soundRef.current.isPlaying) {
          soundRef.current.stop();
        }
      }
    }
  });

  return (
    <>
      <PositionalAudio
        ref={soundRef}
        url={url}
        position={position}
        loop
      />
      {showHelper && (
        <Sphere scale={helperScale} args={[0.5, 32, 32]} position={position}>
          <meshBasicMaterial color="red" />
        </Sphere>
      )}
    </>
  );
};

export default SoundComponent;