import React, {Component,createRef} from 'react';
import { Route, Switch, Link} from "react-router-dom";
import Index from './pages/Index';
import IndexProyecto from './pages/IndexProyecto';
import Fotos from './pages/Fotos';
import Videos from './pages/Videos';
import Adicional from './pages/InfoAdicional';
import Contacto from './pages/Contacto';
import Blog from './pages/Blog';
import NotFound from './pages/NotFound';

class NavHamburguesa extends Component{
  

        iconMenu = createRef() 
        mainMenu = createRef()

      

       mostrarMenu =(e)=>{

            
            this.mainMenu.current.classList.toggle('menu--show')
          
       }

       cerrarMenu =(e)=>{

        if(this.mainMenu.current.classList.contains('menu--show')){

            this.mainMenu.current.classList.remove('menu--show')

        }
       }


 render (){
    return (
      
        
        <>
                <div className="top-bar">
                     <div className="icon-menu" ref={this.iconMenu} onClick={this.mostrarMenu}>
                         <div className="icon-menu__bar"> </div>
                     </div>
                </div>
        
                 <nav>
                     <ul className="menu"  ref={this.mainMenu}>
                         <li className="menu__item" onClick={this.cerrarMenu}> <Link to="/" className="menu__link">Home </Link > </li>
                         <li className="menu__item" onClick={this.cerrarMenu}> <Link to="/proyectos" className="menu__link">Proyectos </Link > </li>
                         <li className="menu__item" onClick={this.cerrarMenu}> <Link to="/fotos" className="menu__link">Fotos </Link > </li>
                         <li className="menu__item" onClick={this.cerrarMenu}> <Link to="/videos" className="menu__link">Videos </Link > </li>
                         <li className="menu__item" onClick={this.cerrarMenu}> <Link to="/adicional" className="menu__link">Adicional </Link > </li>
                         <li className="menu__item" onClick={this.cerrarMenu}> <Link to="/blog" className="menu__link">Blog </Link > </li>
                         <li className="menu__item" onClick={this.cerrarMenu}> <Link to="/contacto" className="menu__link">Contacto </Link > </li>
                     </ul>
                 </nav>

                    <Switch>
                        <Route exact path="/">
                            <Index nombre="Home" />

                        </Route>
                        <Route exact path="/proyectos">
                            <IndexProyecto nombre="Proyectos" />

                        </Route>
                        <Route exact path="/fotos">
                            <Fotos nombre="Fotos" />

                        </Route>
                        <Route exact path="/videos">
                            <Videos nombre="Videos" />

                        </Route>
                        <Route exact path="/adicional">
                            <Adicional nombre="Adicional" />

                        </Route>
                        <Route exact path="/blog">
                            <Blog nombre="Blog" />

                        </Route>
                        <Route exact path="/contacto">
                            <Contacto nombre="Contacto" />

                        </Route>

                        {/* <Route path="*">
                            <NotFound nombre="404 Not Found" />

                        </Route> */}

                    </Switch>
                    
         
                 
        </>
       
  )

 }

}

export default NavHamburguesa
