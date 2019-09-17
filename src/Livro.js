import React, { Component } from 'react';
import $ from 'jquery';
import PubSub from 'pubsub-js';


class TabelaLivros extends Component {
  render(){
      return(
          <div>            
          <table className="pure-table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Preço</th>
                <th>Autor</th>
              </tr>
            </thead>
            <tbody>
              {
                this.props.lista.map((livro, index) => {
                  return(
                    <tr key={index}>
                      <td>{livro.titulo}</td>
                      <td>{livro.preco}</td>
                      <td>{livro.autor.nome}</td>
                    </tr>
                  )
                })
              }
            </tbody>
          </table> 
        </div> 
      )
  }
}

export default class LivroBox extends Component {

  constructor(){
    super();
      this.state = { lista : []};
    }

  componentDidMount(){
    $.ajax({
      url: "http://cdc-react.herokuapp.com/api/livros",
      dataType: 'json',
      success: function(resposta){
        this.setState({lista:resposta})
      }.bind(this)
    })
  
    PubSub.subscribe('atualiza-lista-livros', function(topico, novaLista){
      this.setState({lista: novaLista}) 
      }.bind(this));
  }

  render(){
    return(
      <div>
        <div className="header">
          <h1>Cadastro de livros</h1>  
        </div>             
        <div className="content" id="content">
          <TabelaLivros lista={this.state.lista}/>
        </div>
      </div> 
    );
  }
}