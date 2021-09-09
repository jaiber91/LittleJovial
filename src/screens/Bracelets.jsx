import React, { Fragment } from 'react';
import Header from '../components/basics/Header';
import CardProduct from '../components/basics/CardProducts';
import Footer from '../components/basics/Footer';
import './styles/brazaletes.css'

const Bracelets = () => {
    return ( 
        <Fragment>
            <Header />
            <h2>Brazaletes</h2>
            <CardProduct />
            <Footer />
        </Fragment>
     );
       
        
}
 
export default Bracelets;