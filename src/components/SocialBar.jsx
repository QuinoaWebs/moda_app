import React, {useRef,useEffect} from 'react';
import { Link } from 'react-router-dom';

const SocialBar = () => {

       const socialBar = useRef(null)

       useEffect(() => {
              
            const anchoPantalla = window.innerWidth
            if(anchoPantalla >= 768){

              

            }else{

            }
       }, [])

    return (
        <>
             <div className="social_bar" ref={socialBar} id="social_bar">
                         <ul>
                             <li>
                                 

                                    <Link to ="https://www.facebook.com" className="link fab fa-facebook  f" i="i" target="_blank" rel="noreferrer"></Link >
                                 
                             </li>
                             <li>
                                 

                                    <Link to ="https://www.twitter.com" className=" link fab fa-twitter  t" i="i" target="_blank" rel="noreferrer"></Link >
                                 
                             </li>
                             <li>
                                 

                                    <Link to ="https://www.google.es" className="link fab fa-google-plus-square  g" i="i" target="_blank" rel="noreferrer"></Link >
                                 
                             </li>
                             <li>
                                 

                                    <Link to="https://www.tumblr.com" className=" link fab fa-tumblr-square  tum" i="i" target="_blank" rel="noreferrer"></Link >
                                 
                             </li>
                         </ul>
            </div>
        </>

    )

}

export default SocialBar