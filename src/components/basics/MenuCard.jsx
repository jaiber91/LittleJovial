import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';
import './style/menuCard.css';

const MenuCard = () => {
    const [info, setInfo] = useState([



        {
            id:1,
            category: "Aretes",
            img: "https://i.ibb.co/4VnFP5C/aretes.jpg",
        },
        {
            id:2,
            category: "Manillas",
            img: "https://i.ibb.co/vwCScvR/manillas.jpg"
            

        },
        {
            id:3,
            category: "Collar",
            img: "https://i.ibb.co/7CrDR1W/collar.png"
        },
        {
            id:4,
            category: "Llavero",
            img: "https://i.ibb.co/ZXXJ0sq/llaveros.jpg"
        },
        {
            id:5,
            category: "Miyuki",
            img: "https://i.ibb.co/2Zf4CMC/miyuki.jpg"
        },
        {
            id:6,
            category: "Talleres",
            img: "https://i.ibb.co/X7y81mG/taller.jpg"
        }
    ])
    return ( 
        <section className="cardsContainer">
             {info.map(card =>{
                 return(
                     <Link to={`/${card.category}`}>
                        <Card key={card.id} category={card.category} img={card.img} />
                    </Link>
                 )
             })}
        </section>
       

     );
}
 
export default MenuCard;