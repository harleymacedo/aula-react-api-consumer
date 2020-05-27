import React, {Component} from 'react'

export default class Busca extends Component {

    constructor(props) {
        super(props)
        this.state = {
            textoEntrada: '',
            textoResultado: '',
            textoArea: '',
        }
        this.buscar = this.buscar.bind(this)
        this.atualizarTexto = this.atualizarTexto.bind(this)
    }

    atualizarTexto(event) {
        console.log(event.target.value)
        this.setState({textoEntrada: event.target.value})
      }
    
    buscar() {
    let url = 'https://aula-node-api-server.herokuapp.com/api/' + this.state.textoEntrada
    console.log(url)
    fetch(url)
    .then( (resultado) => {
        return resultado.json()
    })
    .then( (resultado) => {
        let textoResult = 'Nome: ' + resultado.nome
        let textoAreaResult = 'Área: ' + resultado.area
        console.log(textoResult)
        this.setState({textoResultado: textoResult, textoArea: textoAreaResult})
    })
    .catch( (error) => {
        this.setState({textoResultado: 'Valor não encontrado'})
    })
    }

    render() {
        return(
            <div>
                <h2>Busca rápida de Profs</h2>
                <h3>Informe o código:</h3>
                <input type='text' placeholder='0 - 3' onChange={this.atualizarTexto} />
                <input type='button' onClick={this.buscar} value='Buscar' />
                <h4>{this.state.textoResultado}</h4>
                <h4>{this.state.textoArea}</h4>
            </div>
        )
    }
}