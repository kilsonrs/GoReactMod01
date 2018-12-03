import React, { Component, Fragment } from "react";
import { render } from "react-dom";
// import { render } from "react-dom"; É o componente principal de nossa aplicaçao,
//utilizado uma única vez em nossa aplicação

/*
Isso é feito em todos os arquivos que tem algum componente do react.
Qualquer arquivo com sitaxe JSX, que é o HTML dentro do Javascript, é 
sempre preciso fazer o import do react, mesmo que não utilize a variável react 
dentro do componente em si
*/

/* 
Agora começamos a criar os componentes em si. Em React tudo é um componente.
A maioria dos componentes são classes.
Passos:
Define uma Classe
Define um Nome
Fazer com que essa classe estenda a classe padrão de componentes do React.

Duas formas:
    import React from "react";
    class App extends React.Component {}

    import React, { Component } from "react";
    class App extends Component {}

render() -> Dentro da classe Component é o único método obrigatório.
         -> Tem obrigação de retornar o conteúdo em JSX.
*/

class App extends Component {
  render() {
    // Precisa sempre ter uma TAG por volta, como <div> por exemplo.
    return (
      <Fragment>
        <h1>Hello</h1>
        <Button />
      </Fragment>
    );
  }
}

/**
 * QUANDO CRIAR UM COMPONENTE?
 *
 * Basicamente, eu crio um novo componente, uma nova classe, toda vez que 1 componente, que
 * um conjunto de código, fizer sentido sozinho. Quando precisar que seja utilizado em
 * mais de um lugar de nossa aplicação. Ex.: Um botão com a mesma estilização. Também quando a gente
 * consegue isolar uma parte do código javascipt, e ele tem sentido próprio sem estar dentro de
 * outro componente.
 *
 * Componente: é uma mistura de código de visualização(HTML), script em js e também CSS.
 *
 *
 */

class Button extends Component {
  render() {
    return <a href="">Salvar</a>;
  }
}

/*
Todo o componente no react eu posso chamar assim como chama uma TAG no HTML
Como não vai nenhum conteúdo na TAG abaixo 'App', posso fechar na mesma linha que abri.
document.getElementById("app") -> Onde o react vai renderizar
*/
render(<App />, document.getElementById("app"));
