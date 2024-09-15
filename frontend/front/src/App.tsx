import Header from './components/Header.tsx';
import Inicio from './pages/Inicio.tsx'
import Areas from './pages/Areas.tsx'
import Profesionales from './pages/Profesionales.tsx'
import  Tratamientos from './pages/Tratamientos.tsx'

function App() {
return (
   <>
      <Header />
      <Inicio />
      <Areas />
      <Profesionales />
      <Tratamientos />
    </>
  );
}

export default App;