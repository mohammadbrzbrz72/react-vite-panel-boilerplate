import ReactDOM from 'react-dom/client';

import App from './App';

// global styles
import './styles/index.css';
import './styles/globals.css';

const root = document.getElementById('root') as HTMLElement;

ReactDOM.createRoot(root).render(<App />);
