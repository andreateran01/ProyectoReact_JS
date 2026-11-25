import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home.jsx';
import Login from './assets/pages/Login.jsx';
import Registro from './assets/pages/Registro.jsx';
import Error from './assets/pages/Error.jsx';
import Usuario from './assets/pages/Usuario.jsx';
import RutasPublicas from './routes/RutasPublicas';
import RutasPrivadas from './routes/RutasPrivadas';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<RutasPrivadas><Home /></RutasPrivadas>} />
        <Route path='/login' element={<RutasPublicas><Login /></RutasPublicas>} />
        <Route path='/registro' element={<RutasPublicas><Registro /></RutasPublicas>} />
        <Route path='/usuario/:nombre' element={<RutasPrivadas><Usuario /></RutasPrivadas>} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;