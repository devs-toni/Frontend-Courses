import React from 'react';
import Contacto from '../pages/Contacto';
import Service from '../pages/Service';
import Home from '../pages/Home';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Error404 from '../pages/Error404';
import MenuConceptos from './MenuConceptos';
import Usuario from '../pages/Usuario';
import Productos from '../pages/Productos';
import ReactTopics from '../pages/ReactTopics';

const ConceptosBasicos = () => {
  return (
    <Router>
      <MenuConceptos />
      <Switch>
        <Route exact={true} path='/' component={Home} />
        <Route exact={true} path='/service' component={Service} />
        <Route exact={true} path='/contacto' component={Contacto} />
        <Route exact={true} path='/usuario/:username' component={Usuario} />
        <Route exact={true} path='/productos' component={Productos} />
        <Route exact={true} path='/services'>
          <Redirect to='/service' />
        </Route>
        <Route exact={true} path='/contact'>
          <Redirect to='/contacto' />
        </Route>
        <Route path='/react' component={ReactTopics} />
        <Route exact={true} path='*' component={Error404} />
      </Switch>
    </Router>
  )
}

export default ConceptosBasicos