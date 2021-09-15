import React from 'react';
import { Link } from "react-router-dom";
import BotonArriba from './BotonArriba';


const Footer = () => {
  return (
    
    <footer className="footer" id="footer">
        {/* <h3 className="idiomas" id="idiomas"> <Link to="/">EN</Link><Link to="/">IT</Link></h3>
        <h3 className="contacto" id="contacto"><Link to ="Contacto">Contacto</Link></h3>
        <div className="departamento" id="departamento"><Link to="Marqueteria">Dpto marquetería </Link>
            <h3>Tlf +34 123 123 123 </h3>
        </div>
        <div className="redes_sociales" id="redes_sociales"><Link to="Diseno">Dpto diseño</Link>
            <div className="redes" id="redes">
                <spam>Twitter
                    <Link to="https://twitter.com" target="_blank"> <i className="fab fa-twitter-square"> </i></Link>
                </spam>
                <spam>Facebook<Link to="https://facebook.com" target="_blank"><i className="fab fa-facebook-square"></i></Link></spam>
            </div>
        </div> */}
        <div className="legal" id="legal">
            <Link className="aviso_legal" id="aviso_legal" Link to="AvisoLegal" data-fancybox="data-fancybox" data-type="iframe">
                <spam>Aviso Legal</spam>
            </Link>
            <Link className="politica_privacidad" id="politica_privacidad" Link to="Privacidad" data-fancybox="data-fancybox" data-type="iframe">
                <spam>Privacidad</spam>
            </Link>
            <Link className="cookies" id="cookies" Link to="Cookies" data-fancybox="data-fancybox" data-type="iframe">
                <spam>Cookies</spam>
            </Link>
            <Link className="copyright" id="copyright" Link to="Copyright" data-fancybox="data-fancybox" data-type="iframe">
                <spam>Copyright</spam>
            </Link>
        </div>
        <BotonArriba />
    </footer>       
             
    
  )
}

export default Footer
