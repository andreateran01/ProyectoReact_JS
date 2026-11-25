import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './estilos.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './assets/context/Provider.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider>
      <App/>
    </Provider>
  </StrictMode>,
)