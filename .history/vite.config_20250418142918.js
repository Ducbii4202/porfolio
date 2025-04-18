import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';
import Lanyard from './Lanyard'

<Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tailwindcss()]
});

declare module '*.glb';
declare module '*.png';

declare module 'meshline' {
  export const MeshLineGeometry: any;
  export const MeshLineMaterial: any;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      meshLineGeometry: any;
      meshLineMaterial: any;
    }
  }
}

- src/vite-env.d.ts
/// <reference types="vite/client" />
declare module '*.glb';
declare module '*.png';