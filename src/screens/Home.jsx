import React, {Fragment} from 'react';
import Search from '../components/home/Search';
import Slider from '../components/home/Carousel';
import WhatsApp from '../components/home/WhatsApp';
import MenuCard from '../components/basics/MenuCard';
function Home  () {
    return (
        <Fragment>
            <Slider />
            <Search />
            <MenuCard />
            <WhatsApp />
            
        </Fragment> 
        
        
     );
}
 
export default Home;