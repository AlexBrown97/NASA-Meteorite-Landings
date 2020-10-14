import React from "react";

const MeteoriteCards = (props) => {
  console.log(props.geolocation);
  return (
    <section className="card">
      <h2>Name: {props.name}</h2>
      <h3>Year Discovered: {props.year}</h3>
      <h3>Mass(g): {props.mass}</h3>
      <button
        className="button"
        onClick={() =>
          props.setSelectedMeteor(
            props.geolocation.latitude,
            props.geolocation.longitude
          )
        }
      >
        Where Did I Land?
      </button>
    </section>
  );
};

export default MeteoriteCards;
