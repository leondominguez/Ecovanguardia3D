import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import glsl from 'vite-plugin-glsl';

export default defineConfig(({ mode }) => {
  // Cargar variables de entorno desde el directorio 'env'
  const env = loadEnv(mode, path.resolve(__dirname, 'env'));

  // // Imprimir las variables de entorno cargadas
  // console.log('Variables de entorno cargadas:', env);

  return {
    plugins: [react(), glsl()],
    define: {
      // Permite acceder a las variables de entorno en el código usando import.meta.env
      'process.env': {
        ...process.env,
        ...env,
      },
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
    server: {
      host: '0.0.0.0'
    },
    envDir: './env', // Especifica la ruta al directorio .env
  };
});