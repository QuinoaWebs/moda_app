import React from 'react';

import SocialBar from '../SocialBar.jsx';


const Videos = (props) => {
     document.title = props.nombre
  return (
    <>
      
      <div className="contenedor" id="contenedor">   
     
      <section className="main_videos" id="main_videos">
        <div className="imagen_proyecto" id="imagen_proyecto">
          
            
          <div className="videos" id="videos">
            <iframe title='video-moda-1' width="" height="" src="https://www.youtube.com/embed/corm-j1prXY" autoPlay="autoPlay" controls="controls"></iframe>
          </div>
          <SocialBar />
         
          {/* <button id="subir">&#8679;	</button> */}
        </div>
      </section>
   
      </div>
    </>
  )
}

export default Videos
