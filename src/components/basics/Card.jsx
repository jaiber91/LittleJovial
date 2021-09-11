import React, {Fragment} from 'react';
import './style/card.css'

function Card (props) {
    return ( 
        <Fragment>
            <div className="card">
                <img src={props.img} alt="imagen aretes" />
                <div className="cardShadown">
                     <a target="_blank" rel="noopener noreferrer" href="#">{props.category}</a>
                </div>
             </div>
        </Fragment>     
           
            
        
     );
}
 
export default Card;