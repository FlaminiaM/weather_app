import React from 'react';
import './Placeholder.css'

function Placeholder() {
    return (
        <React.Fragment>
            <div className="placeholder__card__icon"> <img src={require(`../../../assets/icons/Default.png`).default} alt="placeholder" /></div>
        </React.Fragment>
    )
}

export default Placeholder
