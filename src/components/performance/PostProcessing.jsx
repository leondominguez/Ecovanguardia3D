import React, { forwardRef, useMemo, useEffect, useLayoutEffect, createContext, useRef, useImperativeHandle } from 'react';
import { useThree, useFrame, useInstanceHandle } from '@react-three/fiber';
import {
  EffectComposer as EffectComposerImpl,
  RenderPass,
  EffectPass,
  NormalPass,
  DepthDownsamplingPass,
  Effect,
  Pass,
  EffectAttribute,
  BlendFunction,
  GlitchMode
} from 'postprocessing';
import { isWebGL2Available } from 'three-stdlib';
import { HalfFloatType, NoToneMapping } from 'three';
import {
  Bloom,
  DepthOfField,
  Vignette,
  ChromaticAberration,
  BrightnessContrast,
  ColorAverage,
  DotScreen,
  Glitch,
  GodRays,
  Grid,
  HueSaturation,
  Noise,
  Outline,
  Pixelation,
  Scanline,
  SelectiveBloom,
  Sepia,
  SMAA,
  SSAO,
  ToneMapping
} from '@react-three/postprocessing';

export const EffectComposerContext = createContext(null);

const isConvolution = (effect) => (effect.getAttributes() & EffectAttribute.CONVOLUTION) === EffectAttribute.CONVOLUTION;

const PostProcessing = forwardRef(({ effects, children, ...props }, ref) => {
  const { gl, scene, camera, size } = useThree();

  const [composer, normalPass, downSamplingPass] = useMemo(() => {
    const webGL2Available = isWebGL2Available();
    const effectComposer = new EffectComposerImpl(gl, {
      depthBuffer: props.depthBuffer,
      stencilBuffer: props.stencilBuffer,
      multisampling: props.multisampling > 0 && webGL2Available ? props.multisampling : 0,
      frameBufferType: props.frameBufferType || HalfFloatType,
    });

    effectComposer.addPass(new RenderPass(scene, camera));

    let normalPass = null;
    let downSamplingPass = null;
    if (props.enableNormalPass) {
      normalPass = new NormalPass(scene, camera);
      normalPass.enabled = false;
      effectComposer.addPass(normalPass);
      if (props.resolutionScale !== undefined && webGL2Available) {
        downSamplingPass = new DepthDownsamplingPass({ normalBuffer: normalPass.texture, resolutionScale: props.resolutionScale });
        downSamplingPass.enabled = false;
        effectComposer.addPass(downSamplingPass);
      }
    }

    return [effectComposer, normalPass, downSamplingPass];
  }, [camera, gl, props.depthBuffer, props.stencilBuffer, props.multisampling, props.frameBufferType, scene, props.enableNormalPass, props.resolutionScale]);

  useEffect(() => composer?.setSize(size.width, size.height), [composer, size]);
  useFrame((_, delta) => {
    if (props.enabled) {
      const currentAutoClear = gl.autoClear;
      gl.autoClear = props.autoClear;
      if (props.stencilBuffer && !props.autoClear) gl.clearStencil();
      composer.render(delta);
      gl.autoClear = currentAutoClear;
    }
  }, props.enabled ? props.renderPriority : 0);

  const group = useRef(null);
  const instance = useInstanceHandle(group);
  useLayoutEffect(() => {
    const passes = [];

    if (group.current && instance.current && composer) {
      const children = instance.current.objects;

      for (let i = 0; i < children.length; i++) {
        const child = children[i];

        if (child instanceof Effect) {
          const effects = [child];

          if (!isConvolution(child)) {
            let next = null;
            while ((next = children[i + 1]) instanceof Effect) {
              if (isConvolution(next)) break;
              effects.push(next);
              i++;
            }
          }

          const pass = new EffectPass(camera, ...effects);
          passes.push(pass);
        } else if (child instanceof Pass) {
          passes.push(child);
        }
      }

      for (const pass of passes) composer?.addPass(pass);

      if (normalPass) normalPass.enabled = true;
      if (downSamplingPass) downSamplingPass.enabled = true;
    }

    return () => {
      for (const pass of passes) composer?.removePass(pass);
      if (normalPass) normalPass.enabled = false;
      if (downSamplingPass) downSamplingPass.enabled = false;
    };
  }, [composer, children, camera, normalPass, downSamplingPass, instance]);

  useEffect(() => {
    const currentTonemapping = gl.toneMapping;
    gl.toneMapping = NoToneMapping;
    return () => {
      gl.toneMapping = currentTonemapping;
    };
  }, []);

  const state = useMemo(() => ({ composer, normalPass, downSamplingPass, resolutionScale: props.resolutionScale, camera, scene }), [composer, normalPass, downSamplingPass, props.resolutionScale, camera, scene]);

  useImperativeHandle(ref, () => composer, [composer]);

  return (
    <EffectComposerContext.Provider value={state}>
      <group ref={group}>
        {effects.includes('bloom') && <Bloom intensity={1.5} luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />}
        {effects.includes('depthOfField') && <DepthOfField focusDistance={0.02} focalLength={0.02} bokehScale={2} height={480} />}
        {effects.includes('vignette') && <Vignette eskil={false} offset={0.1} darkness={1.1} blendFunction={BlendFunction.NORMAL} />}
        {effects.includes('chromaticAberration') && <ChromaticAberration offset={[0.001, 0.001]} />}
        {effects.includes('brightnessContrast') && <BrightnessContrast brightness={0.1} contrast={0.1} />}
        {effects.includes('colorAverage') && <ColorAverage />}
        {effects.includes('dotScreen') && <DotScreen angle={Math.PI * 0.25} scale={1.0} />}
        {effects.includes('glitch') && <Glitch delay={[1.5, 3.5]} duration={[0.6, 1.0]} strength={[0.3, 1.0]} mode={GlitchMode.SPORADIC} />}
        {effects.includes('godRays') && <GodRays sunPosition={[0, 0, 0]} density={0.96} decay={0.93} weight={0.4} exposure={0.6} samples={60} clampMax={1.0} />}
        {effects.includes('grid') && <Grid scale={1.0} lineWidth={0.1} />}
        {effects.includes('hueSaturation') && <HueSaturation hue={0.1} saturation={0.1} />}
        {effects.includes('noise') && <Noise premultiply blendFunction={BlendFunction.ADD} />}
        {effects.includes('outline') && <Outline edgeStrength={10.0} blendFunction={BlendFunction.SCREEN} />}
        {effects.includes('pixelation') && <Pixelation granularity={8.0} />}
        {effects.includes('scanline') && <Scanline density={1.25} />}
        {effects.includes('selectiveBloom') && <SelectiveBloom intensity={1.0} luminanceThreshold={0.3} luminanceSmoothing={0.9} height={300} />}
        {effects.includes('sepia') && <Sepia intensity={0.95} />}
        {effects.includes('smaa') && <SMAA />}
        {effects.includes('ssao') && <SSAO samples={30} radius={0.1} intensity={20} luminanceInfluence={0.9} color="black" />}
        {effects.includes('toneMapping') && <ToneMapping adaptive resolution={256} middleGrey={0.6} maxLuminance={16.0} averageLuminance={1.0} adaptationRate={1.0} />}
      </group>
    </EffectComposerContext.Provider>
  );
});

export default PostProcessing;

/*
uso 
ejemplo

<PostProcessing effects={['bloom', 'depthOfField', 'vignette', 'chromaticAberration']} />

ejemplo completo
        <PostProcessing effects={[
            'bloom',
            'depthOfField',
            'vignette',
            'chromaticAberration',
            'brightnessContrast',
            'colorAverage',
            'dotScreen',
            'glitch',
            'godRays',
            'grid',
            'hueSaturation',
            'noise',
            'outline',
            'pixelation',
            'scanline',
            'selectiveBloom',
            'sepia',
            'smaa',
            'ssao',
            'toneMapping'
          ]} />

Explicación de cada efecto
Bloom: Crea un resplandor alrededor de las áreas brillantes de la escena.
DepthOfField: Ajusta el enfoque de la cámara, permitiendo que algunos objetos estén más nítidos y otros desenfocados.
Vignette: Oscurece los bordes de la imagen, dirigiendo la atención del espectador hacia el centro de la escena.
ChromaticAberration: Simula la aberración cromática, creando un desbordamiento de colores en los bordes de los objetos.
BrightnessContrast: Permite ajustar el brillo y el contraste de la imagen.
ColorAverage: Promedia los colores de toda la escena y los aplica de manera uniforme.
DotScreen: Aplica un patrón de puntos sobre la imagen, simulando un efecto de impresión de trama de puntos.
Glitch: Simula errores digitales o interferencias, generando distorsiones visuales.
GodRays: Simula los rayos de luz que pasan a través de objetos, creando un efecto volumétrico.
Grid: Superpone una cuadrícula en la escena.
HueSaturation: Permite ajustar el tono y la saturación de los colores en la escena.
Noise: Añade ruido o grano a la imagen.
Outline: Resalta los contornos de los objetos en la escena.
Pixelation: Aplica un efecto de pixelación a la imagen.
Scanline: Añade líneas de escaneo a la imagen.
SelectiveBloom: Permite aplicar el efecto de Bloom de forma selectiva.
Sepia: Aplica un filtro sepia a la imagen.
SMAA: Técnica de anti-aliasing que suaviza los bordes de los objetos en la imagen.
SSAO: Añade sombras suaves en las áreas donde los objetos están muy cerca entre sí.
ToneMapping: Ajusta el rango dinámico de la imagen.
*/