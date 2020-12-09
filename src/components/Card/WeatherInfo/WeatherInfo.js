import React from 'react';
import dateformat from 'dateformat';

function WeatherInfo(props) {
    return (
        <React.Fragment>
            <div className="card__icon"> <img src={require(`../../../assets/icons/${props.description}.png`).default} alt={props.type} /></div>
            <div className="card__info">
                <p>{props.type}</p>
                <div className="card__temperature">{Math.round(props.temperature)} <span className="card__degSymbol">°</span></div>
                <div className="card__description">{props.description}</div>
                <div className="card__date">{dateformat(new Date(), "dddd, dd mmmm")} </div>
            </div>
        </React.Fragment>
    )
}

export default WeatherInfo
