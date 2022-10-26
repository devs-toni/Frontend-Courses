import { render } from '@testing-library/react';
import React, { Component } from 'react';

export class EventoES6 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contador: 0,
        };
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(event) {
        this.setState({
            contador: this.state.contador + 1,
        });
    }
    restar(event) {
        this.setState({
            contador: this.state.contador - 1,
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes de Clase</h2>
                <nav>
                    <button onClick={this.sumar}>
                        +
                    </button>
                    <button onClick={this.restar}>
                        -
                    </button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }

}

export class EventoES7 extends Component {
    state = {
        contador: 0
    };

    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1,
        });
    }
    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1,
        });
    }

    render() {
        return (
            <div>
                <h2>Eventos en Componentes Funcionales</h2>
                <nav>
                    <button onClick={this.sumar}>
                        +
                    </button>
                    <button onClick={this.restar}>
                        -
                    </button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        );
    }
}

function Boton ({ event }) {
    return(
    <button onClick={event}>Botón como Componente</button>
    )
};

export class EventosSinteticos extends Component {
    handleClick = (e, sms) => {
        console.log(e.nativeEvent);
        console.log(sms);
    }

    render() {
        return (
            <div>
                <h2>Eventos Sintéticos</h2>
                <button onClick={(e) => this.handleClick(e, 'Hola, soy un evento con parámetros')}>Saludar</button>
                <Boton event={(e) => this.handleClick(e, 'Hola, soy un evento con parámetros')} />
            </div>
        )
    }
}
