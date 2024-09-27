import React from "react";
// import images from "../images/airbnb-grid.jpg";


function Hero() {
    return(
        <section className="hero">
            <img src="../images/airbnb-grid.jpg" alt="grid" className="hero--photo"/>
            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by one-of-a-kind 
                hosts—all without leaving home.</p>
        </section>
    )
}
export default Hero;