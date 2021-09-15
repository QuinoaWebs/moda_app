import React from 'react';
import {BrowserRouter as Router} from "react-router-dom";
import Footer from './components/Footer';
import Header from './components/Header';
import NavHamburguesa from './components/NavHamburguesa';



function App() {
    return (

        

        <Router>
            <Header />
            <NavHamburguesa />


            <Footer />

        </Router>



    







    )
}

export default App;