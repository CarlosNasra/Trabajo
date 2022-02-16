import '../styles/components/pages/Home.css';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Component } from 'react';
import { faEdit, faCheckSquare, faCalendarAlt, faCreditCard, faSmile, faShoppingCart, faTasks, faAddressBook, faCheck } from '@fortawesome/fontawesome-free-solid'



const Home = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            


<Carousel variant="dark">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/Trabajadores.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h5>First slide label</h5>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/catering.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h5>Second slide label</h5>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="img/mecanico.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h5>Third slide label</h5>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
        </div>

        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Bienvenidos</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, placeat sit. Maxime fuga odio
                    eligendi ducimus dolore? Quas, doloremque laboriosam? Inventore voluptatum quidem ullam corrupti,
                    quo facilis sit. Quidem, dolorem?</p>

            </div>

           <div className="testimonios right">
                <h2>Testimonios</h2>
                <div className="testimonio">
                    <span className="cita">Simplemente Excelente</span>
                    <span className="autor">Juan</span>

                </div>
            </div>
        </div>

        <div className="comienzo">
            <h2>Comienza ahora</h2>
        </div>

        <div className="columnas1">
            <div className="funcionamiento">
                <FontAwesomeIcon className="icono" icon={faEdit} fa-2x />
                <h2>Publica el trabajo</h2>
                
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>

            </div>



            <div className="funcionamiento">
            <FontAwesomeIcon className="icono" icon={faCheckSquare} />
                <h2>Elige un proveedor</h2>
                
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>

            </div>
            <div className="funcionamiento">
            <FontAwesomeIcon className="icono" icon={faCalendarAlt} />
                <h2>Realiza seguimiento</h2>
                
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>

            </div>
            <div className="funcionamiento">
                 
            <FontAwesomeIcon className="icono" icon={faCreditCard} />
                <h2>Elije pago seguro</h2>
               
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>

            </div>

        </div>





        <div className="columnas">
            <div className="bienvenidos left">
                <h2>Explora</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, placeat sit. Maxime fuga odio
                    eligendi ducimus dolore? Quas, doloremque laboriosam? Inventore voluptatum quidem ullam corrupti,
                    quo facilis sit. Quidem, dolorem?</p>

            </div>

          
        </div>

        <div className="comienzo">
            <h2>Explora los portfolios</h2>
        </div>

        <div className="columnas1">
            <div className="funcionamiento">
                <FontAwesomeIcon className="icono" icon={faAddressBook} />
                <h2>Revisa los trabajos de los proveedores</h2>
                
                
                

            </div>



            <div className="funcionamiento">
            <FontAwesomeIcon className="icono" icon={faTasks} />
                <h2>Asegura la calidad que necesitas</h2>
                
                
                

            </div>
            <div className="funcionamiento">
            <FontAwesomeIcon className="icono" icon={faSmile} />
                <h2>Verifica las calificaciones de los usuarios</h2>
                
                
               

            </div>
            <div className="funcionamiento">
                 
            <FontAwesomeIcon className="icono" icon={faShoppingCart} />
                <h2>Contrata todo mas rápido y seguro</h2>
               
                

            </div>

        </div>


    </main>
    );
}
export default Home;