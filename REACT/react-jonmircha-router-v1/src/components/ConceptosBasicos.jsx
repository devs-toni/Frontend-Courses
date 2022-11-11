import React from 'react';
import Contacto from '../pages/Contacto';
import Service from '../pages/Service';
import Home from '../pages/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Error404 from '../pages/Error404';
import MenuConceptos from './MenuConceptos';
const ConceptosBasicos = () => {
  return (
      <Router>
        <MenuConceptos />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/service' component={Service} />
          <Route exact path='/contacto' component={Contacto} />
          <Route path='*' component={Error404} />
        </Switch>
      </Router>
  )
}

export default ConceptosBasicos