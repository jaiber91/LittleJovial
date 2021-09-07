import React from 'react';
import LogoInstagram from '../../images/icons/instagram.png';
import LogoFacebook from '../../images/icons/facebook.png';
import '../basics/style/footer.css'

 function Footer(){
    return (  
        <div className="footer">
            <div>
                <img src={LogoInstagram} alt="logo instagram" />
                <img src={LogoFacebook} alt="logo facebook" />
            </div>
            <p>Little jovial © 2021</p>
        </div>
    );
}
 
export default Footer;