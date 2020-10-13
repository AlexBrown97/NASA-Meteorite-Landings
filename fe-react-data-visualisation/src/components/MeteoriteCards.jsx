import React from 'react';


const MeteoriteCards = (props) => {
    return (
        <section className="card">
            <h2>Name: {props.name}</h2>
            <h3>Year Discovered: {props.year}</h3>
            <h3>Mass(g): {props.mass}</h3>
            <button onClick={props.showLocation} lat={props.lat} long={props.long}>Where Did I Land?</button>
        </section>
    )
}

export default MeteoriteCards;