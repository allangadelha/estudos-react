import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'allan';
  const newName = name.toUpperCase(name);

  function sum(a, b) {
    return a + b;
  }

  const url = 'https://via.placeholder.com/150';

  return (
    <div className="App">
      <h1>Modificando o JSX!</h1>
      <p>Olá, { newName }</p>
      <p>Soma de 2 + 2 = { sum(2,2) }</p>
      <img src={ url } alt="Imagem de teste"/>
      <HelloWorld />
      <Frase />
    </div>
  );
}

export default App;
