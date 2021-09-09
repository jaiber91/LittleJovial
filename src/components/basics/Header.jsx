import React, {Fragment} from 'react';
import Logo from '../../images/logo.png';
import buyCar from '../../images/icons/car.svg';
import imgPrincipal from '../../images/img.jpeg';
import './style/header.css';


function Header()  {
     return (
         <Fragment>
             <header>
                 <nav className="navigation">
                    <img className="navigation__logo" src={Logo} alt="logo" />
                    <ul className="navigation__items">
                        <li>Home</li>
                        <li>Productos</li>
                        <li>Nosotros</li>
                        <li>Contacto</li>
                    </ul>
                    <img className="navigation__car" src={buyCar} alt="carro de compra" />
                 </nav>
               
                 {/*<img className="slider" src={imgPrincipal} alt="imagen de collar" />*/}
             </header>
         </Fragment>
       )
 }
  
 export default Header;