import React from 'react'
import { Link, Route, Switch, useParams, useRouteMatch } from 'react-router-dom'

export const Topic= () => {
    let { topic } = useParams();
    console.log(topic);
    return (
        <>
            <h2>{`Esta es la sección de ${topic}`}</h2>
        </>
    );
}


const ReactTopics = () => {

let { path, url } = useRouteMatch();

    return (
        <div>
            <h3>Temas de React</h3>
            <ul>
                <li><Link to={`${url}/jsx`}>JSX</Link></li>
                <li><Link to={`${url}/props`}>Props</Link></li>
                <li><Link to={`${url}/estado`}>Estado</Link></li>
                <li><Link to={`${url}/componente`}>Componente</Link></li>
            </ul>
            <Switch>
                <Route exact={true} path={path}>
                    <h2>Tema de React</h2>
                </Route>
                <Route path={`${path}/:topic`} component={Topic}/>
            </Switch>
        </div>
    )
}

export default ReactTopics