import React, {Fragment} from 'react';
import CardProduct from '../components/basics/CardProducts';
import '../screens/styles/earrings.css';
import data from '../data/data.json';

function Earrings ()  {
    console.log(data);
    return ( 
        <Fragment>
            <h2>Aretes</h2>
            <CardProduct />
        </Fragment>
     );
}
 
export default Earrings;