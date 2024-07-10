import React from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import Pagina1 from './Componentes/Pagina1'
import Pagina02 from './Componentes/Pagina02'

export default function App() { 

    return (
    <> 
    <header>
      <Link to='/'>Home</Link>
      <Link to='/pag1'>Página 1</Link>
      <Link to='/pag2'>Página 2</Link>
    </header>
    <main>
      <switch>
        <Route path='/pag1' element={<Pagina1/>}/> 
        <Route path='/pag2' Component={Pagina02}/>
      </switch>
    </main>
    </>
  );
  }