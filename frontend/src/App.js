//import logo from './logo.svg';

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';
import Contacto from './pages/Contacto';
import Home from './pages/Home';
import Nosotros from './pages/Nosotros';
import Novedades from './pages/Novedades';
import Servicios from './pages/Servicios';
import Categorias from './pages/Categorias';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="App">
   
   <Router>
   <Header></Header>
   <Nav></Nav>
<Routes>
<Route path="/" exact element={<Home />} />
<Route path="/nosotros" exact element={<Nosotros />} />
<Route path="/novedades" exact element={<Novedades />} />
<Route path="/contacto" exact element={<Contacto />} />
<Route path="/servicios" exact element={<Servicios />} />
<Route path="/categorias" exact element={<Categorias />} />
</Routes>
  
   <Footer></Footer>
   </Router>
   
    </div>
  );
}

export default App;
