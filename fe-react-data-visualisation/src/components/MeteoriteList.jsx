import React from "react";
import MeteoriteCards from "../components/MeteoriteCards";

const MeteoriteList = (props) => {
  return (
    <section>
      {props.meteorites.map((meteorite) => {
        console.log(meteorite);
        const { latitude, longitude } = meteorite.geolocation;
        return <MeteoriteCards key={meteorite.id} name={meteorite.name} year={meteorite.year.slice(0, 4)} mass={meteorite.mass}/>;
      })}
    </section>
  );
};

export default MeteoriteList;
