/*import React, {useState}from 'react'

const carros=[
  {categoria:"Esporte", preco:"111000", modelo:"Golf GTI"},
  {categoria:"Esporte", preco:"120000", modelo:"Camaro"},
  {categoria:"SUV", preco:"12200", modelo:"HRV"},
  {categoria:"SUV", preco:"20000", modelo:"T-Cross"},
  {categoria:"Utilitario", preco:"900000", modelo:"Hillux"},
  {categoria:"Utilitario", preco:"70000", modelo:"Ranger"}
]

const linhas=(cat)=>{ 
  const li=[]
  carros.forEach(
    (carro)=>{
      if(carro.categoria.toUpperCase()===cat.toUpperCase() || cat.toUpperCase() === ''){
        li.push(
          <tr>
            <td>{carro.categoria}</td>
            <td>{carro.preco}</td>
            <td>{carro.modelo}</td>
          </tr>
        )
      }
    }
  )
  return li
}

const TabelaCarros=()=>{
  return(
<table border='1' style={{borderCollapse:'collapse'}}>
  <thead>
    <tr>
      <th>Categoria</th><th>Preço</th><th>Modelo</th>
    </tr>
  </thead>
  <tbody>
    {linhas(cat)}
  </tbody>
</table>
  )
}

const pesquisaCategorias=(cat,scat)=>{
  return(
    <div>
      <label>Digite uma categoria</label>
      <input type="text" value={cat} onChange={(e)=>scat(e.target.value)}/>
    </div>
  )
}

export default function App() { 

  const [categoria, setCategoria]=useState('')
  
    return (
    <> 
     {pesquisaCategorias(categoria, setCategoria)}
     <br/>
     {TabelaCarros(categoria)}
    </>
  );
    }*/
