import React from 'react';



import SocialBar from '../SocialBar.jsx';


const IndexProyecto = (props) => {
     document.title = props.nombre
  return (
    

    <>
    
        <div class="contenedor" id="contenedor">   
          
          <section className="main_proyecto" id="main_proyecto">
            <div className="imagen_proyecto" id="imagen_proyecto">
              
              
              <div className="texto_centrado" id="texto_centrado">
                <div className="fondo" id="fondo">
                  <h4>PROYECTO MUÑECO DE NIEVE</h4>
                  <p>Este método ha nacido porque existen muchos métodos nuevos de ambientar la navidad y a todos nos gusta tener nuestro hogar lleno de coloridos y de cosas bonitas que nos recuerdan las fechas en las que estamos. Fechas entrañables y llenas de paz y de amor para todos.</p>
                </div>
              </div>
             <SocialBar />
            </div>
            {/* <button id="subir">&#8679;</button> */}
          </section>

          
         
        </div>
    
      
  </>
  )
}

export default IndexProyecto
