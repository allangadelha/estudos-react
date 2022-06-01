import './App.css';
import { useState } from 'react';
import MyName from './components/MyName';
import Saudacao from './components/Saudacao';

function App() {

  const [nome, setNome] = useState();

  return (
    <div className="App">
      <h1>State lift</h1>
      <MyName setNome={setNome} />
      <Saudacao nome={nome}/>
    </div>
  );
}

export default App;
