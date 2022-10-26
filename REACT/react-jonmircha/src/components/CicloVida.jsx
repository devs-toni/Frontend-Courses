import { render } from "@testing-library/react";
import React, { Component } from "react";

class Reloj extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                <h2>{this.props.hora}</h2>
            </>
        );
    }
    componentWillUnmount() {
        console.log(4, 'El componente ha sido eliminado del DOM')
    }
}

export default class CicloVida extends Component {
    constructor(props) {
        super(props);
        console.log(0, "El componente se está construyendo, no está en el DOM");
        this.state = {
            hora: new Date().toLocaleTimeString(),
            visible: false
        };
        this.temporizador = null;
    }

    componentDidMount() {
        console.log(2, "El componente ya se encuentra en el DOM")
    }
    componentDidUpdate(prevProps, prevState) {
        console.log(3, "El estado del componente ha sido renderizado, y en efecto, actualizado")
        console.log(prevProps);
        console.log(prevState);
    }

    iniciar = (e) => {
        this.tictac();
        this.setState({
            visible: true
        })
    }
    detener = (e) => {
        clearInterval(this.temporizador);
        this.setState({
            visible: false
        })
    }
    tictac = (e) => {
        this.temporizador = setInterval(() => {
            this.setState({
                hora: new Date().toLocaleTimeString()
            })
        }, 1000);
    }

    render() {
        console.log(1, "El componente se está renderizando en el DOM")
        return (
            <>
                <h2>Ciclo de Vida de los Componentes de Clase</h2>
                {this.state.visible && <Reloj hora={this.state.hora} />}
                <button onClick={this.iniciar}>
                    Iniciar Reloj
                </button>
                <button onClick={this.detener}>
                    Detener Reloj
                </button>
            </>
        );
    }
}