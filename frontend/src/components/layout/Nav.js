import '../../styles/components/layout/Nav.css';
import { NavLink } from 'react-router-dom';
const Nav = (props) => {
    return (
        <nav>
        <ul className="holder">
            <li><NavLink activeClassName="activo" to="/">Home</NavLink></li>
            <li><NavLink activeClassName="activo" to="/nosotros">Nosotros</NavLink></li>
            <li><NavLink activeClassName="activo" to="/novedades">Novedades</NavLink></li>
            <li><NavLink activeClassName="activo" to="/contacto">Contacto</NavLink></li>

        </ul>
    </nav>
    );
}
export default Nav;