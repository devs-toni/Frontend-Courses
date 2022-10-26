import React, { Component } from "react";

export class ComponenteClase extends Component {  
    constructor (props){
        super(props);
    }

    render(){
       return <h2>{this.props.msg}</h2>
    };
}

