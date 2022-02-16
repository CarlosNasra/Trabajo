import '../../styles/components/layout/Nav.css';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';


const Navi = (props) => {
  return (
    <header>

      
      <nav>

         <ul className="holder">
            <li><NavLink activeClassName="activo" to="/">Home</NavLink></li>
            
            <li><NavLink activeClassName="activo" to="/servicios">Servicios</NavLink></li>
            
            <li><NavLink activeClassName="activo" to="/categorias">Categorias</NavLink></li>
           <li>
        </li>

            
         </ul>
      </nav>
    

</header>


  );
}
export default Navi;