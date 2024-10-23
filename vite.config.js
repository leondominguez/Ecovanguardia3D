import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { loadEnv } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Carga las variables de entorno específicas para el modo actual (development, production, etc.)
  const env = loadEnv(mode, path.resolve(__dirname, 'env'));

  return {
    plugins: [react()],
    define: {
      // Permite acceder a las variables de entorno en el código usando import.meta.env
      'process.env': env,
    },
  };
});
