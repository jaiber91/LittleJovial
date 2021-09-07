import React from 'react';
import './style/search.css';
import Lupa from '../../images/icons/lupa.png';

function Search (){
    return ( 
        <div className="search">
            <input type="search" name="busquedamusica" placeholder="Busca tu producto" ></input>
            <img src={Lupa} alt="icono lupa" />
        </div>
     );
}
 
export default Search;