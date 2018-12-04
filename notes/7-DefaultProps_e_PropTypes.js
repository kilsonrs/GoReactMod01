/**
 *  Tratativa de quando as propriedades não são passadas, quais valores deem assumir
 */

import React, { Component, Fragment } from "react";
import { render } from "react-dom";

import PropTypes from "prop-types";

class Button extends Component {
  render() {
    return (
      <a href="" onClick={this.props.onClick}>
        {this.props.children}
      </a>
    );
  }
}

// Lidar com Props padrão
Button.defaultProps = {
  children: "Salvar"
};

// npm install prop-types -> Fazer tipagem dentro do código, se obrigatórias, de que tipo.
// import PropTypes from "prop-types";

// Validar PropTypes
Button.PropTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};
class App extends Component {
  render() {
    handleClick = () => {
      alert("Botao Clicado.");
    };
    return (
      <Fragment>
        <h1>Hello</h1>
        <Button
          onClick={() => {
            alert("Botão clicado");
          }}
        />
        <Button onClick={this.handleClick}>Enviar</Button>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById("app"));
