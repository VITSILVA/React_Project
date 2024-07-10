import React, {useState} from 'react'

export default class BaseClasse extends React.Component {
constructor(props){
 
//para permitir o uso de props    
super(props)

//state
this.state={
    canal:'CFB Cursos',
    curso:'React',
    ativo:true,
    nome: this.props.nomeAluno
}
this.status=this.props.status

//bindagem
let ad=this.ativarDesativar.bind(this)
//instruções do contrutor
}

//funçãoa para manipular state
ativarDesativar(){
    this.setState(
        state=>({
            ativo:!state.ativo
        })
    )
}

componentDidMount(){
    console.log('o componente foi criado')
}

componentDidUpdate(){
    console.log('o componente foi atualizado')
}

componentWillUnmount(){
    console.log('o componente foi removido')
}

render(){
    return(
        <>
        <h1>compornente de classe</h1>
        <button onClick={this.ad}>Ativar Desativar</button>
        <button onClick={()=>this.ativarDesativar}>Ativar Desativar</button>
        </>
    )
}
}