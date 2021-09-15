import React from 'react';
import SocialBar from '../SocialBar.jsx';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
// import SliderFotos from '../SliderFotos';





const Fotos = (props) => {
       document.title = props.nombre

  return (

    <>
        <div className="contenedor" id="contenedor">   
         
          <section className="main_fotos" id="main_fotos">
            <div className="imagen_proyecto" id="imagen_proyecto">
              
          
            
              <SocialBar />
            
              <div className='deslizador slide'>

              
                  <AwesomeSlider>
                    <div data-src="https://st2.depositphotos.com/1041088/7766/i/600/depositphotos_77665926-stock-photo-large-modern-house-with-stone.jpg" />
                    <div data-src="https://st.depositphotos.com/1898669/1846/i/600/depositphotos_18468017-stock-photo-colonial-brick-house.jpg" />
                    <div data-src="https://st.depositphotos.com/1898669/1846/i/600/depositphotos_18468017-stock-photo-colonial-brick-house.jpg" />
                  </AwesomeSlider>

                  {/* <SliderFotos /> */}
              

              </div>
              
              {/* <button id="subir">&#8679;</button> */}
            </div>
          </section>
     
         
        </div>
    
    </>    
  )
}

export default Fotos
