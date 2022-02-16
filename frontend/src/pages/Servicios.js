import '../styles/components/pages/Servicios.css';
import React from 'react';
const Servicios = (props) => {
    return (
        <section className="holder">
        <h2>Servicios</h2>
        <div class="servicio">
            <img src="img/cliente.jpg" alt="cliente" />
            <div class="info">
                <h4>Clientes</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus molestiae, voluptatem minima
                    praesentium voluptatum, autem accusantium distinctio minus nesciunt perspiciatis odio exercitationem
                    dolorem voluptates optio molestias eum, deleniti eaque?</p>
                
            </div>

        </div>
        <div class="servicio">
            <img src="img/proveedor.jpg" alt="proveedor" />
            <div class="info">
                <h4>Proveedores</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id temporibus molestiae, voluptatem minima
                    praesentium voluptatum, autem accusantium distinctio minus nesciunt perspiciatis odio exercitationem
                    dolorem voluptates optio molestias eum, deleniti eaque?</p>
                
            </div>

        </div>


    </section>
    );
}
export default Servicios;