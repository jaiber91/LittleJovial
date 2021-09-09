import React, { Fragment } from 'react';
import Header from '../components/basics/Header';
import CardProduct from '../components/basics/CardProducts';
import Footer from '../components/basics/Footer';
import './styles/miyuki.css'

const Miyuki = () => {
    return ( 
        <Fragment>
            <Header/>
            <h2>Miyuki</h2>
            <CardProduct />
            <Footer />
        </Fragment>
     );
}
 
export default Miyuki;