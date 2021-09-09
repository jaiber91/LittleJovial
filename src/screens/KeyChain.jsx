import React, { Fragment } from 'react';
import Header from '../components/basics/Header';
import CardProduct from '../components/basics/CardProducts';
import Footer from '../components/basics/Footer';
import './styles/keyChain.css'

const KeyChain = () => {
    return (
        <Fragment>
         <Header />
         <h2>Llaveros</h2>
         <CardProduct />
         <Footer/>
        </Fragment>
      );
}
 
export default KeyChain;