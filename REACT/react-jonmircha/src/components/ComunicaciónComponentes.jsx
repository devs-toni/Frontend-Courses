import React, { Component } from "react";

export default class Father extends Component {
    state = {
        contador: 0
    }

    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 10
        })
    }
    restar = (e) => {
        this.setState({
            contador: this.state.contador - 10 
        })
    }

    render() {
        return (
            <>
                <h2>Comunicación entre Componentes</h2>
                <h2>{this.state.contador}</h2>
                <Son sum={true} sumar={this.sumar} mensaje='Mensaje para el hijo' id={1} />         
                <Son sum={false} restar={this.restar} mensaje='Mensaje para el hijo' id={1} />           
            </>

       );
    }
}

function Son(props) {
    return (
        <>
            <h3>{props.mensaje + ' numero ' + props.id}</h3>
            <button onClick={props.sum ? props.sumar : props.restar}>+</button>
            <h2>{props.cont}</h2>
        </>
    )
}