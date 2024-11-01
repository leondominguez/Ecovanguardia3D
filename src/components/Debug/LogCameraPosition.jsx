const LogCameraPosition = () => {
    useFrame(({ camera }) => {
      console.log(`Camera position: x=${camera.position.x}, y=${camera.position.y}, z=${camera.position.z}`);
    });
    return null;
  };
  export default LogCameraPosition;