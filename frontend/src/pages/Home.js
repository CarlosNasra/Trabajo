import '../styles/components/pages/Home.css';
import React from 'react';
const Home = (props) => {
    return (
        <main className="holder">
        <div className="homeimg">
            <img src="img/equipo.jpg" alt="Equipo" />

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

        <div className="columnas">
            <div className="funcionamiento">
                <h2>Publica un proyecto</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>

            </div>



            <div className="funcionamiento">
                <h2>Elige un proveedor</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>

            </div>
            <div className="funcionamiento">
                <h2>Realiza seguimiento</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>

            </div>
            <div className="funcionamiento">
                <h2>Paga de manera segura</h2>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam, modi praesentium soluta
                    explicabo adipisci officia blanditiis, voluptatum iusto quam rem iste neque? Modi magnam veritatis
                    earum ut soluta iste.</p>

            </div>

        </div>


    </main>
    );
}
export default Home;