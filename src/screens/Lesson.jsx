import React, {Fragment} from 'react';
import Header from '../components/basics/Header';
import CardProduct from '../components/basics/CardProducts';
import Footer from '../components/basics/Footer';
import './styles/lesson.css'

const Lesson = () => {
    return ( 
        <Fragment>
            <Header />
             <h2>Talleres</h2>
            <CardProduct />
            <Footer/>
       </Fragment>
     );
}
 
export default Lesson;