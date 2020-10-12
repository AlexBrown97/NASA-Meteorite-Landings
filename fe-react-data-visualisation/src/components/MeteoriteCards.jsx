import React from 'react';


const MeteoriteCards = (props) => {
    return (
        <section>
            <h2>Name: {props.name}</h2>
            <h3>Year Discovered: {props.year}</h3>
            <h3>Mass(g): {props.mass}</h3>
        </section>
    )
}

export default MeteoriteCards;