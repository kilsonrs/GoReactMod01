/**
 * Button Stateful => Componente em forma de 'classe'
 *  */ 
import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

export default class Button extends Component {
  static defaultProps = {
    children: "Salvar"
  };

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string
  };

  render() {
    return <button onClick={this.props.onClick}>{this.props.children}</button>;
  }
}

/**
 * Button Stateless => Componente em forma de 'função'
 *  */ 

import React from "react";
import PropTypes from "prop-types";

const Button = props => (
  <button onClick={props.onClick}>{props.children}</button>
);

Button.defaultProps = {
  children: "Salvar"
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string
};

export default Button;

