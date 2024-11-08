import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import path from 'path';
import glsl from 'vite-plugin-glsl';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno específicas para el modo actual (development, production, etc.)
  const env = loadEnv(mode, path.resolve(__dirname, 'env'));

  return {
    plugins: [react(),glsl()],
    define: {
      // Permite acceder a las variables de entorno en el código usando import.meta.env
      'process.env': env,
    },
    build: {
      rollupOptions: {
        input: {
          main: path.resolve(__dirname, 'index.html'),
          // Asegúrate de incluir cualquier otro archivo de entrada necesario
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  };
});