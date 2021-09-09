import React, {Fragment} from 'react';
import Header from '../components/basics/Header';
import CardProduct from '../components/basics/CardProducts';
import Footer from '../components/basics/Footer';
import '../screens/styles/earrings.css';

function Earrings ()  {
    return ( 
        <Fragment>
            <Header />
            <h2>Aretes</h2>
            <CardProduct />
            <Footer />
        </Fragment>
     );
}
 
export default Earrings;