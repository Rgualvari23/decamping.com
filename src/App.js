import React from "react";
import Cards from './Componentes/Cards'
import './App.css'
import Medioambiente from './Componentes/Medioambiente'
import Tabs from './Componentes/Tabs'

function App() {
  return (
    <div className="App">

      <Medioambiente />

      <h4 className="Titulo1">PAQUETES</h4>

      <Cards />

      <Tabs/>

    </div>

  );
}

export default App;
