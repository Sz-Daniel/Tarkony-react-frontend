import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

if (import.meta.env.PROD) {
  console.log = () => {};
  console.debug = () => {};
  console.warn = () => {};
  console.table = () => {};
}

createRoot(document.getElementById('root')!).render(<App />);
