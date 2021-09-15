import React, {useEffect, useRef} from 'react';
import { animateScroll as scroll } from "react-scroll";

const BotonArriba = () => {

    const scrollArriba = useRef(null)
    useEffect(() => {
      
        window.addEventListener('scroll', ()=>{

            const distanciaScroll = window.scrollY
           
            if(distanciaScroll >= 150){

                scrollArriba.current.classList.add('scroll-to-top--show')
            }else{

                scrollArriba.current.classList.remove('scroll-to-top--show')
            }
        })

       
    }, [])

    const scrollToTop = () => {
        scroll.scrollToTop();
    };

  
    return (
        <div>
            <div id="scroll-to-top" class="scroll-to-top" ref={scrollArriba}  onClick={scrollToTop}>&#8679;</div>
        </div>
    )
}

export default BotonArriba
