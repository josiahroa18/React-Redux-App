import React from 'react';
import '../App.css';

const HeroCard = ({hero}) => {   
    return (
        <div className={`card ${hero.attack_type === 'Melee' ? 'melee' : 'ranged'}`}>
            <img src={`https://api.opendota.com${hero.img}`}></img>
            <div className='text-container'>
                <h1>{hero.localized_name}</h1>
                <p>Attack Type: {hero.attack_type}</p>
            </div>
            
        </div>
    )
}

export default HeroCard;