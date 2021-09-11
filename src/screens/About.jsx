import React, { Fragment } from 'react';
import LogoAbout from '../images/logo.png';



import './styles/about.css'
const About = () => {
    return ( 
        <Fragment>
            
            <section className="about">
             <h2>Nosotros</h2>
             <div className="about__info">
                   <div className="about__info--text">
                        <h3>Nuestra historia</h3>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At iusto nulla quos sint. Nihil pariatur autem cum corrupti veritatis ab odit quam, porro error odio excepturi voluptate vel nemo? Magnam.
                    Provident fugiat delectus officia nisi enim sunt laudantium consequuntur, porro, distinctio qui cupiditate consequatur dignissimos! Officia culpa voluptates magni, quibusdam ipsa sed, expedita nisi reiciendis tempora, aspernatur maxime accusantium fugiat.
                    Ipsa fugiat voluptas, illum illo nulla magni natus facere et nostrum nam cupiditate quia. Molestiae blanditiis id aliquid voluptas nihil saepe cupiditate veritatis ullam quos rem assumenda magni, quisquam ipsam.
                    Rem tenetur facilis quisquam doloribus voluptas expedita ut. Dolor dolore sed ea, reiciendis modi blanditiis! Architecto illum natus, eius magnam odit recusandae in aut? Possimus consequatur assumenda placeat ipsa odio.
                     </p>
                    </div>
                    <div className="about__img">
                       <img src={LogoAbout} alt="imagen sobre nosotros" />
                    </div>
                </div>
            </section>
          
        </Fragment>
        
     );
}
 
export default About;