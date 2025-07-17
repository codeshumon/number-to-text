
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'], 
  format: ['cjs', 'esm', 'iife'], 
  globalName: 'NumberToWords', 
  outDir: 'dist',
  dts: true, 
  shims: true, 
  skipNodeModulesBundle: true, 
  clean: true, 

  
  outExtension({ format }) {
    if (format === 'iife') {
      return { js: '.global.js' }; 
    }
    if (format === 'esm') {
      return { js: '.mjs' }; 
    }
    return { js: '.js' };
  },
});
