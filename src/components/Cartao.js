import React, {Component} from 'react'

class Cartao extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={cartaoEstilo}>
                <p>Nome: {this.props.nome}</p>
                <p>Area: {this.props.area}</p>
            </div>
        )
    }
}

const cartaoEstilo = {
    backgroundColor: '#665',
    border: '1px solid',
    textAlign: 'center',
    color: 'white',
    width: '300px',
    height: '200px',
    margin: '30px'
}

export default Cartao