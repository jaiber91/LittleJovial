import React, {Fragment} from 'react';
import imgEarrings from '../../images/aretes.jpeg';
import './style/card.css'

function Card () {
    return ( 
        <Fragment>
            <div className="card">
                <img src={imgEarrings} alt="imagen aretes" />
            </div>
            <div className="cardShadown">

            </div>
        </Fragment>
     );
}
 
export default Card;