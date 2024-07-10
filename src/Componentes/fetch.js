import React,{useEffect,useState}from 'react'

export default function ListaCarros(){
    
    const [carros,setCarros]=useState([])

  useEffect(()=>{
    fetch('cfbcursosapireactexemplo1.vitoraugusto59.repl.co')
    .then((res)=>res.json())
    .then(
        (resultado)=>{
            setCarros(resultado)
        }
    )
  }
  )
        return(
            <div>
                {carros.map(
                    carro=> <div key={carro.id}>{carro.id} - {carro.marca} - {carro.modelo}</div>
                )}
            </div>
        )
}