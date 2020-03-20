import React from 'react';
import RoleBadge from './RoleBadge';
import '../App.css';

const HeroCard = ({hero}) => {   
    return (
        <div className={`card ${hero.attack_type === 'Melee' ? 'melee' : 'ranged'}`}>
            <img src={`https://api.opendota.com${hero.img}`} alt={hero.localized_name}></img>
            <div className='text-container'>
                <h2>{hero.localized_name}</h2>
                <p>Attack Type: {hero.attack_type}</p>
                <h3>Roles:</h3>
                <div className='role-container'>
                    {hero.roles.map(role => {
                        return <RoleBadge role={role}/>
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default HeroCard;