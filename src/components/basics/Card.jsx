import React, {Fragment} from 'react';
import imgEarrings from '../../images/aretes.jpeg';
import './style/card.css'

function Card () {
    return ( 
        <Fragment>
            <div className="card">
                <img src={imgEarrings} alt="imagen aretes" />
                <div className="cardShadown">
                     <a target="_blank" rel="noopener noreferrer" href="https://www.automarcalichevrolet.co/">Aretes</a>
                </div>
             </div>
        </Fragment>     
           
            
        
     );
}
 
export default Card;