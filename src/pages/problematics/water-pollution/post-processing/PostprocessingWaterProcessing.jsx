import { EffectComposer, HueSaturation } from "@react-three/postprocessing";

const PostProcessing = () => {
  return (
    <EffectComposer>
      <HueSaturation saturation={-0.3} />
    </EffectComposer>
  );
}

export default PostProcessing;