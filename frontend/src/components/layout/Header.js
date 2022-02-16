import '../../styles/components/layout/Header.css';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { NavLink } from 'react-router-dom';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { Collapse } from 'react-bootstrap';


const Header = (props) => {
    return (
        <header>
     <style>
@import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
</style>
       
        <div className="holder">
       


          <div className="botonera">
        <Navbar bg="transparent" expand={false}>
    <Container fluid>
    
    <Navbar.Toggle aria-controls="offcanvasNavbar" />
    <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      placement="start"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Menú</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Nav className="justify-content-end flex-grow-1 pe-3">
        

          <NavLink activeClassName="activo" to="/nosotros">Nosotros</NavLink>
          
        <NavLink activeClassName="activo" to="/novedades">Novedades</NavLink>
         
         <NavLink activeClassName="activo" to="/contacto">Contacto</NavLink>
      </Nav>    
 
 
      
      </Offcanvas.Body>
    </Navbar.Offcanvas>
  </Container>
</Navbar>
     
        
        <button class="btn btn-outline-primary">Ingresa</button>{' '}
        <button class="btn btn-outline-secondary">Registrate</button>{' '}
        <button class="btn btn-success">Comienza ahora!</button>{' '}
        </div>
         
            <img src="img/ali-2.png" alt="logo" width="80" margin-left="10px" />
            <h1>alidoro</h1>
            <h3>Trabajo libre, inclusivo y colaborativo - sin comisiones</h3>
        
       
        </div>



    </header>
    );
}
export default Header;