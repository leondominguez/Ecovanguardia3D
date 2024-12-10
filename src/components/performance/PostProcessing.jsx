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
  Vignette,
  ChromaticAberration,
  BrightnessContrast,
  ColorAverage,
  DotScreen,
  Glitch,
  Grid,
  HueSaturation,
  Noise,
  Pixelation,
  Scanline,
  Sepia,
  SMAA,
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
        {effects.bloom && <Bloom {...effects.bloom} />}
        {effects.chromaticAberration && <ChromaticAberration {...effects.chromaticAberration} />}
        {effects.vignette && <Vignette {...effects.vignette} />}
        {effects.brightnessContrast && <BrightnessContrast {...effects.brightnessContrast} />}
        {effects.colorAverage && <ColorAverage {...effects.colorAverage} />}
        {effects.dotScreen && <DotScreen {...effects.dotScreen} />}
        {effects.glitch && <Glitch {...effects.glitch} />}
        {effects.grid && <Grid {...effects.grid} />}
        {effects.noise && <Noise {...effects.noise} />}
        {effects.hueSaturation && <HueSaturation {...effects.hueSaturation} />}
        {effects.pixelation && <Pixelation {...effects.pixelation} />}
        {effects.scanline && <Scanline {...effects.scanline} />}
        {effects.sepia && <Sepia {...effects.sepia} />}
        {effects.smaa && <SMAA {...effects.smaa} />}
        {effects.toneMapping && <ToneMapping {...effects.toneMapping} />}
        {children}
      </group>
    </EffectComposerContext.Provider>
  );
});

export default PostProcessing;

/*
uso 
ejemplo

<PostProcessing effects={{
  bloom: { intensity: 1.5, luminanceThreshold: 0.3, luminanceSmoothing: 0.9, height: 300 },
  chromaticAberration: { offset: [0.001, 0.001] },
  vignette: { offset: 0.1, darkness: 0.5 },
  brightnessContrast: { brightness: 0.1, contrast: 0.1 },
  colorAverage: { color: "#23566e" },
  dotScreen: { angle: Math.PI * 0.25, scale: 1.0 },
  glitch: { active: true, duration: 1.0, strength: 0.5 },
  grid: { scale: 1.0, lineWidth: 0.1 },
  noise: { intensity: 0.1 },
  hueSaturation: { hue: 0.1, saturation: 0.1 },
  pixelation: { granularity: 8.0 },
  scanline: { density: 1.25 },
  sepia: { intensity: 0.95 },
  smaa: { dfs: 0, kernelSize: 1, output: 1 },
  toneMapping: { adaptive: true, resolution: 256, middleGrey: 0.6, maxLuminance: 16.0, averageLuminance: 1.0, adaptationRate: 1.0 }
}} />

Explicación de cada efecto
Bloom: Crea un resplandor alrededor de las áreas brillantes de la escena.
ChromaticAberration: Simula la aberración cromática, creando un desbordamiento de colores en los bordes de los objetos.
Vignette: Oscurece los bordes de la imagen, dirigiendo la atención del espectador hacia el centro de la escena.
BrightnessContrast: Permite ajustar el brillo y el contraste de la imagen.
ColorAverage: Promedia los colores de toda la escena y los aplica de manera uniforme.
DotScreen: Aplica un patrón de puntos sobre la imagen, simulando un efecto de impresión de trama de puntos.
Glitch: Simula errores digitales o interferencias, generando distorsiones visuales.
Grid: Superpone una cuadrícula en la escena.
Noise: Añade ruido o grano a la imagen.
HueSaturation: Permite ajustar el tono y la saturación de los colores en la escena.
Pixelation: Aplica un efecto de pixelación a la imagen.
Scanline: Añade líneas de escaneo a la imagen.
Sepia: Aplica un filtro sepia a la imagen.
SMAA: Técnica de anti-aliasing que suaviza los bordes de los objetos en la imagen.
ToneMapping: Ajusta el rango dinámico de la imagen.
*/