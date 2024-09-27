import React from "react";


function Card(props) {
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={`../images/${props.img}`} alt="card" className="card--image"/>
            <div className="card--stats">
                <img src="../images/star.png" alt="star" className="card--star" width="20px"/>
                <span>{props.rating}</span>
                <span className="graay">({props.reviewCount}) .</span>
                <span className="graay">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;