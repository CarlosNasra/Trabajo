import React from 'react';
const Contacto = (props) => {
    return (
        
    <main className="holder">
    <div className="columna left">
        <h2>Contacto rápido</h2>
        <form action="" method="" className="formulario">
            <p>
                <label for="">Nombre</label>
                <input type="text" name="nombre"/>
            </p>

            <p>
                <label for="">Email</label>
                <input type="email" name="email"/>
            </p>
            <p>
                <label for="">Teléfono</label>
                <input type="telefono" name="telefono"/>
            </p>
            <p>
                <label for="">Comentario</label>
                <input type="comentario" name="comentario"/>
            </p>
            <p className="acciones"><input type="submit" value="Enviar"/></p>
        </form>
    </div>
<div className="columna right">
<h2>Otras vías de contacto</h2>
<p>Tambien se puede comunicar con nosotros...</p>
<ul>
<li>Teléfono: 123123123</li>
<li>Email: dede@hotmail.com</li>
<li>Facebook:</li>
<li>Twitter:</li>
<li>Skype:</li>

</ul>

</div>

</main>
    );
}
export default Contacto;