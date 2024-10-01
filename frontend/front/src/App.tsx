import Header from './components/Header.tsx';
import Inicio from './pages/Inicio.tsx';
import Areas from './pages/Areas.tsx';
import Profesionales from './pages/Profesionales.tsx';
import Tratamientos from './pages/Tratamientos.tsx';
import Ingresar from './pages/Ingresar.tsx';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      
      {/* Rutas para páginas específicas */}
      <Routes>
        <Route path="/ingresar" element={<Ingresar />} />
        {/* Ruta para la endless page (inicio, áreas, etc.) */}
        <Route path="/" element={
          <>
            <Inicio />
            <Areas />
            <Profesionales />
            <Tratamientos />
          </>
        } />
      </Routes>
    </Router>
  );
}

export default App;
