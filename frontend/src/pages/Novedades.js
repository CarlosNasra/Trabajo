import axios from 'axios';
import React, {useState, useEffect } from 'react';
import NovedadItem from '../components/novedades/NovedadItem';



import '../styles/components/pages/Novedades.css';
//import React from 'react';
import { NavItem } from 'react-bootstrap';
const Novedades = (props) => {
  
  const [loading, setLoading] = useState(false);
  const [novedades, setNovedades] = useState([]);

  useEffect(() => {
      const cargarNovedades = async () => {
          setLoading(true);
          const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/novedades`);
          setNovedades(response.data);
          setLoading(false);  

      };
      cargarNovedades();
  }, []);
  
  
    return (
        <section className="holder">
        <h2>Novedades</h2>
        <div className="novedades">
            
            { loading ? (
                <p> Cargando...</p>
            ) : (
                novedades.map(item => <NovedadItem key={item.id}
                    title={item.titulo} subtitle={item.subtitulo}
                    imagen={item.imagen} body={item.cuerpo} />)
            
            )}

        </div>

    </section>
    );
}
export default Novedades;