import './App.css';
import logo from './imagenes/Logo.jpg';
import { Tarea } from './componentes/Tarea';
import { TareaFormulario } from './componentes/TareaFormulario';
import { ListaDeTareas } from './componentes/ListaDeTareas';

function App() {
    return (
        <div className="aplicacion-tareas">
            <div className='freecodecamp-logo-contenedor'>
                <img
                    src={logo}
                    className='freecodecamp-logo'
                />
            </div>
            <div className='tareas-lista-principal'>
                <h1>Mis Tareas</h1>
                <ListaDeTareas />
            </div>
        </div>
    );
}

export default App;
