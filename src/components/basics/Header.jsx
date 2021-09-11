import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo.png';
import buyCar from '../../images/icons/car.svg';

//import imgPrincipal from '../../images/img.jpeg';
import './style/header.css';


function Header()  {
     return (
         <Fragment>
             <header>
                 <nav className="navigation">
                    <img className="navigation__logo" src={Logo} alt="logo" />
                    <ul className="navigation__items">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Productos</Link></li>
                        <li><Link to="/About">Nosotros</Link></li>
                        <li><Link to="/Contact">Contacto</Link></li>
                    </ul>
                    <img className="navigation__car" src={buyCar} alt="carro de compra" />
                 </nav>
               
                 {/*<img className="slider" src={imgPrincipal} alt="imagen de collar" />*/}
             </header>
            

         </Fragment>
       )
 }
  
 export default Header;