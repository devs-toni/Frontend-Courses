import React, { Component } from "react";
import data from '../helpers/data.json';

function ElementoLista(props) {
    return (
        <li>
            <a href={props.datas.web} target="_blank">{props.datas.name}</a>
        </li>
    );
}

export default class RenderizadoElementos extends Component {
    constructor(props) {
        super(props);
        this.state = {
            seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno']
        }
    }

    render() {
        console.log(data);
        return (
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estaciones del Año</h3>
                <ol>
                    {
                        this.state.seasons.map((el, index) => <li key={index}>{el}</li>)
                    }
                </ol>
                <h3>Frameworks Frontend</h3>
                <ul>{
                    data.frameworks.map((el) => <ElementoLista datas={el} key={el.id} />)
                }</ul>
            </div>
        );
    }
}
