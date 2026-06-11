import { useState } from 'react';
import Finalizacion from './screens/Finalizacion';
import RespuestaGrabacion from './screens/RespuestaGrabacion';
import ListaDeCandidatos from './screens/ListaDeCandidatos';
import InicioTerminos from './screens/InicioTerminos';
import PruebaDeEquipo from './screens/PruebaDeEquipo';
import ConfirmacionDeInicio from './screens/ConfirmacionDeInicio';
import DashboardEntrevistador from './screens/DashboardEntrevistador';
import DetalleDeCandidato from './screens/DetalleDeCandidato';
import GestionDePreguntas from './screens/GestionDePreguntas';
import InstruccionesDePreparacion from './screens/InstruccionesDePreparacion';
import PreguntaLectura from './screens/PreguntaLectura';

const screens = [
  ['Finalización', Finalizacion],
  ['Respuesta grabación', RespuestaGrabacion],
  ['Lista de candidatos', ListaDeCandidatos],
  ['Inicio términos', InicioTerminos],
  ['Prueba de equipo', PruebaDeEquipo],
  ['Confirmación inicio', ConfirmacionDeInicio],
  ['Dashboard entrevistador', DashboardEntrevistador],
  ['Detalle candidato', DetalleDeCandidato],
  ['Gestión preguntas', GestionDePreguntas],
  ['Instrucciones', InstruccionesDePreparacion],
  ['Pregunta lectura', PreguntaLectura],
] as const;

export default function App() {
  const [index, setIndex] = useState(0);
  const ActiveScreen = screens[index][1];

  return (
    <div className="mockup-app">
      <nav className="mockup-nav" aria-label="Navegación de pantallas del mockup">
        <strong>Mockup / InterviewConnect</strong>
        <div className="mockup-tabs">
          {screens.map(([name], i) => (
            <button key={name} className={i === index ? 'active' : ''} onClick={() => setIndex(i)}>
              {name}
            </button>
          ))}
        </div>
      </nav>
      <div className="mockup-stage">
        <ActiveScreen />
      </div>
    </div>
  );
}
