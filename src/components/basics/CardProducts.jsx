import React,{Fragment} from 'react';
import ImgCard from '../../images/imgProduct.png';
import './style/cardProducts.css';

const CardProduct = () => {
    return ( 
        <Fragment>
            <section className="CardContainer">
            <div className="CardProduct">
                <div className="CardProduct__img">
                    <img src={ImgCard} alt="imagen arete mariposa" />
                </div>
                <div className="CardProduct__info">
                    <h3>Aretes Mariposa</h3>
                    <p>20.000COP</p>
                </div>
            </div>
            <div className="buttomProduct">
                <a href="#">Agregar al carrito</a>
            </div>
            </section>
          
        </Fragment>
     );
}
 
export default CardProduct;