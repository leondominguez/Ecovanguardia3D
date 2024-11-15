export function Seabed(props) {
  const group = useRef();
  const pointLightRef = useRef();
  const { nodes, materials, animations } = useGLTF('/models-3d/seabed/christ_of_the_abyss_merged.glb');
  const { actions } = useAnimations(animations, group);
  const { scene } = useThree();

  // Reproducir las animaciones al cargar
  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => {
        action.play();
      });
    }
  }, [actions]);

  // Añadir el PointLightHelper para depuración
  useEffect(() => {
    if (pointLightRef.current) {
      const helper = new PointLightHelper(pointLightRef.current, 5, 'blue');
      scene.add(helper);

      // Eliminar el helper al desmontar el componente
      return () => {
        scene.remove(helper);
      };
    }
  }, [scene]);

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Luz puntual con el helper */}
      <pointLight ref={pointLightRef} position={[5, 10, 5]} intensity={2} castShadow />

      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={1.34}>
          <group name="Root">
            <group name="sol" position={[0, 0, 0.029]} scale={[15.42, 15.42, 9]}>
              <mesh name="sol_0" geometry={nodes.sol_0.geometry} material={materials.material} />
            </group>
            <group name="rayons" position={[-0.387, -6.663, 1]} scale={[1, 0.025, 1]}>
              <mesh name="rayons_0" geometry={nodes.rayons_0.geometry} material={materials.rayons} />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/models-3d/seabed/christ_of_the_abyss_merged.glb');
export default Seabed;
