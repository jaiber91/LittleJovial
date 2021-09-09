import React, {Fragment} from 'react';
import Header from '../components/basics/Header';
import Search from '../components/home/Search';
import Card from '../components/basics/Card';
import Footer from '../components/basics/Footer';
import Slider from '../components/home/Carousel';
import WhatsApp from '../components/home/WhatsApp';
function Home  () {
    return (
        <Fragment>
            <Header />
            <Slider />
            <Search />
            <Card />
            <Card />
            <WhatsApp />
            <Footer />
        </Fragment> 
        
        
     );
}
 
export default Home;