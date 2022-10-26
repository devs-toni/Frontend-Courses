import logo from './logo.svg';
import './App.css';
import { ComponenteClase } from './components/ComponenteClase';
import { ComponenteFuncional } from './components/ComponenteFuncional';
import { ComponenteArrow } from './components/ComponenteArrow';
import Estado from './components/Estado';
import ComponenteCondicional from './components/ComponenteCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';
import { EventoES6, EventoES7, EventosSinteticos } from './components/Evento';
import ComunicaciónComponentes from './components/ComunicaciónComponentes';
import CicloVida from './components/CicloVida';
import AjaxApis from './components/AjaxApis';
import ContadorHooks from './components/ContadorHooks';
import ScrollHooks from './components/ScrollHooks';
import RelojHooks from './components/RelojHooks';
import AjaxHooks from './components/AjaxHooks';
import CustomHooks from './components/CustomHooks';
import Referencias from './components/Referencias';
import Formularios from './components/Formularios';
import FormularioHookOne from './components/FormularioHookOne';
import Estilos from './components/Estilos';
import ComponentesEstilizados from './components/ComponentesEstilizados';
import Bulma from './components/Bulma';
import ReactMui from './components/ReactMui';


function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <section>
          <ReactMui />
          <hr />
          <Bulma />
          <hr />
          <ComponentesEstilizados />
          <hr />
          <Estilos />
          <hr />
          <FormularioHookOne />
          <hr />
          <Formularios />
          <hr />
          <Referencias />
          <hr />
          <CustomHooks />
          <hr />
          <AjaxHooks />
          <hr />
          <RelojHooks />
          <hr />
          <ScrollHooks />
          <hr />
          <ContadorHooks titulo='seguidores' />
          <hr />
          <AjaxApis />
          <hr />
          <ComponenteClase msg='Hola soy un componente de clase' />
          <hr />
          <ComponenteFuncional msg='Hola soy un componente funcional' />
          <hr />
          <ComponenteArrow
            msg='Hola soy un componente con funcion flecha'
            porDefecto='Las nuevas props'
            numero='4556'
            booleano={true}
            arreglo={[1, 2, 3]}
            objeto={{ nombre: 'John', correo: 'jonie@gmail.com' }}
            elemento={<i>Esto es un elemento React</i>}
            componente={<ComponenteFuncional msg='nuevo componente function'></ComponenteFuncional>}
            funcion={(num) => num * 5}
          />
          <hr />
          <Estado />
          <hr />
          <ComponenteCondicional />
          <hr />
          <RenderizadoElementos />
          <hr />
          <EventoES6 />
          <hr />
          <EventoES7 />
          <hr />
          <EventosSinteticos />
          <hr />
          <ComunicaciónComponentes />
          <hr />
          <CicloVida />
          <hr />
        </section>
        <hr />

      </header>

      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css"></link>
    </div>
  );
}

export default App;
