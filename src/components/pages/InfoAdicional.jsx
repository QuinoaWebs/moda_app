import React from 'react';

import SocialBar from '../SocialBar.jsx';


const InfoAdicional = (props) => {
     document.title = props.nombre
  return (
    <>
      
      <div className="contenedor" id="contenedor">   
 
      <section className="main_info_adicional" id="main_info_adicional">
        <div className="imagen_proyecto" id="imagen_proyecto">
         
          
          <div className="videos" id="videos">
            <iframe title = 'video-manualidades-1' width="" height="" src="https://www.youtube.com/embed/corm-j1prXY" autoplay="autoplay" controls="controls"></iframe>
          </div>
          <div className="videos" id="videos">
            <iframe title = 'video-manualidades-2' width="" height="" src="https://www.youtube.com/embed/hTdhXxxWREo" autoplay="autoplay" controls="controls"></iframe>
          </div>
          <div className="videos" id="videos">
            <iframe title = 'video-manualidades-3' width="" height="" src="https://www.youtube.com/embed/hTdhXxxWREo" autoplay="autoplay" controls="controls"></iframe>
          </div>
         <SocialBar />
          {/* <button id="subir">&#8679;	</button> */}
         
        </div>
      </section>
  
      </div>
    </>
  )
}

export default InfoAdicional
