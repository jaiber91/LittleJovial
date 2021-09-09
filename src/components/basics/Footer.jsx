import React from 'react';
import LogoInstagram from '../../images/icons/instagram.png';
import LogoFacebook from '../../images/icons/facebook.png';
import '../basics/style/footer.css'

 function Footer(){
    return (  
        <div className="footer">
            <div className="footer__logos">
                <a target="_blank" rel="noreferrer" href="https://www.instagram.com/littlejovial_accesorios/" ><img src={LogoInstagram} alt="logo instagram" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Little-Jovial-102975834945151" ><img src={LogoFacebook} alt="logo facebook" /></a>
                
                
            </div>
            <p>Little jovial © 2021</p>
        </div>
    );
}
 
export default Footer;