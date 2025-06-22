import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/EyesClinic/',  // استبدل هذا باسم مستودع GitHub الخاص بك
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});