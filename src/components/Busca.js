import React, {Component} from 'react'
import Cartao from './Cartao'

export default class Busca extends Component {

    constructor(props) {
        super(props)
        this.state = {
            textoEntrada: '',
            dados: [],
        }
        this.buscar = this.buscar.bind(this)
        this.atualizarTexto = this.atualizarTexto.bind(this)
    }

    atualizarTexto(event) {
        this.setState({textoEntrada: event.target.value})
      }
    
    buscar() {
        let url = 'https://aula-node-api-server.herokuapp.com/api/'
        + this.state.textoEntrada
        fetch(url)
        .then( (resultado) => {
            return resultado.json()
        })
        .then( (resultado) => {
            this.setState({dados: resultado})      
        })
        .catch( (error) => {
            this.setState({dados: 'Valor não encontrado'})
        })
    }

    render() {
        return(
            <div>
                <h2>Busca rápida de Profs</h2>
                <h3>Informe o código:</h3>
                <input type='text' placeholder='Termo' onChange={this.atualizarTexto} />
                <input type='button' onClick={this.buscar} value='Buscar' />
                <div style={container}>
                    
                    {
                        this.state.dados.map( (item) => {
                            return ( <Cartao nome={item.nome} area={item.area} /> )
                        })
                    }
                </div>
            </div>
        )
    }
}

const container = {
    display: 'flex',
    flexDirection: 'row'
}
