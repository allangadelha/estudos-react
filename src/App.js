import './App.css';
import Frase from './components/Frase';
import HelloWorld from './components/HelloWorld';
import People from './components/People';
import SayMyName from './components/SayMyName';

function App() {
  
  return (
    <div className="App">
      <h1>Treinando CSS</h1>
      <HelloWorld />
      <Frase />
      <SayMyName name="Allan"/>
      <People 
        nome="Allan Gadelha"
        foto="https://miro.medium.com/fit/c/176/176/0*v06bUnSTYM39tuoR"
        idade="41"
        profissao="Dev full-stack"
      />
    </div>
  );
}

export default App;
