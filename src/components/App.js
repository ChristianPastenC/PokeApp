// ============================================================================
// Funciona como router principal de la aplicación
// llama al componente home que incluye los otros
// dos componentes de funciones principales
// ============================================================================
import './App.css';
import HomeComponent from '../components/HomeComponent';

const App = () => {
  return (
    <div className="App">
      <HomeComponent></HomeComponent>
    </div>
  );
}

export default App;
