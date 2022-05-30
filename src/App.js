import './App.css';
import HelloWorld from './components/HelloWorld';
import People from './components/People';
import SayMyName from './components/SayMyName';

function App() {
  
  return (
    <div className="App">
      <HelloWorld />
      <SayMyName name="Allan"/>
      <People 
        nome="Allan Gadelha"
        foto="https://miro.medium.com/fit/c/176/176/0*v06bUnSTYM39tuoR"
        idade="411"
        profissao="Dev full-stack"
      />
    </div>
  );
}

export default App;
