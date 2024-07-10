import React from 'react'

export default function Nota(props){
    return(
        <div>
            <legend>Informe a nota: {props.num}</legend>
            <input type="text" name={props.nome} value={props.Nota} onChange={(e)=>props.setNota(e)}></input>
        </div>
    )
}