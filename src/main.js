// Punto de entrada principal de la aplicación
import { initializeApp } from './app';
import './styles/tailwind.css';

// Esperamos a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
  console.log('Aplicación JavaScript + Vite iniciada');
  
  // Aquí llamaré siempre al APP de app.js
  
  initializeApp();

});