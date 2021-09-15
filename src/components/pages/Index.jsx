import React from 'react';
import {Link } from "react-router-dom";
// import Fondo from '../../img/fondo.jpg';
import MunecoDeNieve from '../../img/munecoDeNieve.jpg';

import SocialBar from '../SocialBar.jsx';











const Index = (props) => {
    
   document.title = props.nombre
   
  
  return (
    
    
      <>
      
        
            
            <div className="contenedor" id="contenedor">
             
                <section className="main" id="main">
                    <figure className="imagen_manos" id="imagen_manos">
                        
                       
                       
                         
{/*                     
                     <div className="parrafos" id="parrafos">
                         <p>Nunc pellentesque lectus non lacus ultricies efficitur.
                             felis elit, auctor ut sollicitudin eget, ultrices et odio.
                             mauris nisi, rhoncus ac tempor ut, hendrerit sit amet lectus. 
                             a placerat quam. Nunc ac diam metus. Vestibulum consectetur laoreet mi.
                             pellentesque lectus non lacus ultricies efficitur. Quisque felis elit, auctor ut sollicitudin eget, ultrices et odio. Donec mauris nisi, rhoncus ac tempor ut, hendrerit sit amet lectus. Mauris a placerat quam. Nunc ac diam metus. Vestibulum
                                 consectetur laoreet mi. Vestibulum efficitur dui eros, sodales dignissim risus facilisis in. Nunc porttitor a metus non ultricies. Aliquam congue porta risus non malesuada.
                         </p>
                         <p>Nunc pellentesque lectus non lacus ultricies efficitur.
                             felis elit, auctor ut sollicitudin eget, ultrices et odio. 
                            mauris nisi, rhoncus ac tempor ut, hendrerit sit amet lectus. 
                             a placerat quam. Nunc ac diam metus. Vestibulum consectetur loreet mi.
                             ellentesque lectus non lacus ultricies efficitur. Quisque felis elit, auctor ut sollicitudin eget, ultrices et odio. Donec mauris nisi, rhoncus ac tempor ut, hendrerit sit amet lectus. Mauris a placerat quam. Nunc ac diam metus. Vestibulum
                                 consectetur laoreet mi. Vestibulum efficitur dui eros, sodales dignissim risus facilisis in. Nunc porttitor a metus non ultricies. Aliquam congue porta risus non malesuada.
                         </p>
                         <p>Nunc pellentesque lectus non lacus ultricies efficitur.
                           pellentesque lectus non lacus ultricies efficitur. Quisque felis elit, auctor ut sollicitudin eget, ultrices et odio. Donec mauris nisi, rhoncus ac tempor ut, hendrerit sit amet lectus. Mauris a placerat quam. Nunc ac diam metus. Vestibulum
                                 consectetur laoreet mi. Vestibulum efficitur dui eros, sodales dignissim risus facilisis in. Nunc porttitor a metus non ultricies. Aliquam congue porta risus non malesuada.
                         </p>
                         <p>Nunc pellentesque lectus non lacus ultricies efficitur.
                            
                             Nuncpellentesque lectus non lacus ultricies efficitur. Quisque felis elit, auctor ut sollicitudin eget, ultrices et odio. Donec mauris nisi, rhoncus ac tempor ut, hendrerit sit amet lectus. Mauris a placerat quam. Nunc ac diam metus. Vestibulum
                                 consectetur laoreet mi. Vestibulum efficitur dui eros, sodales dignissim risus facilisis in. Nunc porttitor a metus non ultricies. Aliquam congue porta risus non malesuada. 
                         </p>
                     </div> */}
                   
                     <div className="proyectos_actuales" id="proyectos_actuales">
                      
                      <figure>
                        
                            
                            <Link to= "/proyectos"><img className="img_muñecos" src = {MunecoDeNieve} alt="imagen de fondo de los proyectos actuales" id="img_muñecos" /></Link >
                        

                       
                      </figure>
                      <p className="descripcion" id="descripcion">Descripción: Nunc pellentesque lectus non lacus ultricies efficitur. Quisque felis elit, auctor ut sollicitudin eget, ultrices et odio. Donec mauris nisi, rhoncus ac tempor ut, hendrerit sit amet lectus. Mauris a placerat quam. Nunc ac diam
                         metus. Vestibulum consectetur laoreet mi. Vestibulum efficitur dui eros, sodales dignissim risus facilisis in. Nunc porttitor a metus non ultricies. Aliquam congue porta risus non malesuada.</p>
                  
                    </div> 
                </figure>
                </section>
                 
                 
                    
              
            </div>
            <SocialBar />
            {/* <button id="subir">&#8679;</button> */}
        
      </>

    

    
  )

}


export default Index
