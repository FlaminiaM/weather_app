import React from 'react';
import './Card.css';
import WeatherInfo from './WeatherInfo/WeatherInfo';
import Placeholder from './Placeholder/Placeholder';

function Card(props) {
    let cardContent = null;
    if(props.hasLoaded){
        cardContent = <WeatherInfo {...props}/>
    } else{
        cardContent = <Placeholder />
    }
    return (
        <div className="card">
           {cardContent}
        </div>
    )
}

export default Card
