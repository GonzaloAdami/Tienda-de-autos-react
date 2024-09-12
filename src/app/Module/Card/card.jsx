import React from "react";
import './style.css';

function Card({ title, description, img, datos }) {  // Recibe los props title y description
    const cardStyle = {
        width: '28rem',
        padding: '0',
        border: 'none',      
        borderRadius: '20px 20px 15px 15px'  
    };

    return (
        <div className="card mb-3" style={cardStyle}>
            <img
                src={img}
                className="card-img-top img-size"
                alt={title}
                loading="lazy"
            />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>  {/* Usa el prop title */}
                <p className="card-text card-text-mw">
                    {description}  {/* Usa el prop description */}
                </p>
                <p className="card-text">
                    <small className="text-body-secondary">{datos}</small>
                </p>
            </div>
        </div>
    );
}

export default Card;
