import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Empresa from "./components/pages/Empresa";
import Contato from "./components/pages/Contato";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' exact='true' element={<Home/>}></Route>
          <Route path='/empresa' element={<Empresa/>}></Route>
          <Route path='/contato' element={<Contato/>}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
