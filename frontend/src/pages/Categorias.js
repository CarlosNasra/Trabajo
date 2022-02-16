import '../styles/components/pages/Categorias.css';
import React from 'react';
const Categorias = (props) => {
    return (
       <section class="holder">
            <h2>Categorías</h2>

        <div class="Galeria">

            <div class="categorias">
                <div class="categoria">
                    <div class="foto">
                        <img src="img/domestico.jpg" alt="domestico" />
                        
                </div>
                    <h5>Servicio doméstico</h5>
            </div>
                <div class="categoria">
                    <div class="foto">
                        <img src="img/construccion.jpg" alt="construccion" />
                 
                </div>
                    <h5>Construcción</h5>

            </div>
                <div class="categoria">
                    <div class="foto">
                        <img src="img/automotor.jpg" alt="automotor" />
                       
                    </div>
                    <h5>Automotor</h5>
                </div>
                <div class="categoria">
                    <div class="foto">
                        <img src="img/mascotas.jpg" alt="mascotas" />
                        
                    </div>
                    <h5>Mascotas</h5>

                </div>
                <div class="categoria">
                    <div class="foto">
                        <img src="img/eventos.jpg" alt="eventos" />
                    
                   
                    <h5>Fiestas y Eventos</h5>
                </div>
                


        </div>
        </div>
       </div> 
      </section>


    );
}
export default Categorias;