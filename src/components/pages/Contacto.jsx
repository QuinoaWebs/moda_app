import React from 'react';


import SocialBar from '../SocialBar.jsx';




const Contacto = (props) => {
   
    
     document.title = props.nombre
  return (
    
     

  <>

    <div className="contenedor" id="contenedor">   
   
      {/* <Link to='/'> 
        <div className="home" id="home">
          <i className=" icono fas fa-home" id="icono"> </i>
        </div>
      </Link>  */}
      <section className="main_contactar" id="main_contactar">
        <div className="contact" id="contact">
          <div className="inFormacion" id="inFormacion">
            <h2 className="contacta" id="contacta">Contacta con nosotros</h2>
            <p>Si necesitas más inhtmlFormación sobre nuestra empresa o sobre nuestros servicios, ponte en contacto con nosotros hoy mismo a través del siguiente htmlFormulario, llámanos o ven a vernos a nuestras instalaciones. Estaremos encantados de atenderte.</p>
            <p>Calle Ocarasa, 58, 28080 Madrid, Madrid, España</p>
            <p>+34 662 622 622</p>
            <p>contacto@gmail.com</p>
          </div> 
          <div className="Formulario" id="Formulario">
            <h3>Formulario de Contacto</h3>
            <form method="GET" id='form' className='form'>
              <div>
                <label htmlFor="nombre">Nombre:</label>
                <input className="nombre" type="text" name="nombre" id="nombre" required="required"/>
              </div>
              <div>
                <label htmlFor="apellidos">Apellidos:</label>
                <input className="apellidos" type="text" name="apellidos" id="apellidos" required="required"/>
              </div>
              <div>
                <label htmlFor="telefono">Teléfono:</label>
                <input className="telefono" type="tel" name="telefono" id="telefono" required="required"/>
              </div>
             <div>
                <label htmlFor="email">Email:</label>
                <input className="email" type="email" name="email" id="email" required="required"/>
             </div>
             <div>
                <label htmlFor="comentario">Escriba un Comentario:</label>
                <textarea className="comentario" name="comentario" id="comentario"></textarea>
             </div>
             <div className="botones__formulario">
               
              <input className="enviar" type="submit" name="enviar" id="enviar" value="Enviar" data-icon="mail" data-iconpos="left"/>
              <input className="borrar_datos" type="reset" name="borrar_datos" id="borrar_datos" value="Borrar" data-icon="delete" data-iconpos="left"/>
             </div>

             
              
            </form>
          </div>
          <div className="mapa" id="mapa">
            <iframe title='mapa-google' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3140.421346755883!2d-0.9484559847332801!3d38.083855179704315!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd63991ef7f67289%3A0x578c1bfb59fecd!2sCalle+Bado%2C+03300+Orihuela%2C+Alicante!5e0!3m2!1ses!2ses!4v1552637270552" width="250" height="200" frameBorder="0"  allowFullScreen="allowfullscreen"></iframe>
          </div> 
        </div>
      </section>
      <SocialBar />

        {/* <button id="subir">&#8679;</button> */}
        {/* < Scripts /> */}
   
    </div>

    
  </> 
    
  )
}

export default Contacto
