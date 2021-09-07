import React, {Fragment} from 'react';
import Header from '../components/basics/Header';
import Search from '../components/home/Search';
import Card from '../components/basics/Card';
import Footer from '../components/basics/Footer';

function Home  () {
    return (
        <Fragment>
            <Header />
            <Search />
            <Card />
            <Footer />
        </Fragment> 
        
        
     );
}
 
export default Home;