import '../css/App.css';
import { Testimonio } from './testimonio.jsx';

function App() {
  return (
    <div className='App'>
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:</h1>
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen='emma'
          cargo='Ingeniera de Software'
          empresa='Spotify'
          testimonio={['Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudia Javascript, así como estructuras de datos y algoritmos en ', <strong>freeCodeCamp me dio las habilidades</strong>, ' y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify.']} />
        <Testimonio
          nombre='Sarah Connor'
          pais='España'
          imagen='sarah'
          cargo='Ingeniera de Software'
          empresa='Amazon'
          testimonio={['Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudia Javascript, así como estructuras de datos y algoritmos en ', <strong>freeCodeCamp me dio las habilidades</strong>, ' y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Amazon.']} />

        <Testimonio
          nombre='Shawn Wayne'
          pais='Francia'
          imagen='shawn'
          cargo='Ingeniera de Software'
          empresa='Indra'
          testimonio={['Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudia Javascript, así como estructuras de datos y algoritmos en ', <strong>freeCodeCamp me dio las habilidades</strong>, ' y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Indra.' ]} />
      </div>
    </div>
  );
}

export default App;
