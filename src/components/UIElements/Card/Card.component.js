import React from 'react';

import './Card.styles.css';

const Card = (props) => {
    return (
        <div className="card-container">
            {props.children}
        </div>
    )
};

export default Card;