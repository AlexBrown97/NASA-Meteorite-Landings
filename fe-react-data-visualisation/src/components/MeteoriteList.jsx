import React from "react";
import MeteoriteCards from "../components/MeteoriteCards";

const MeteoriteList = (props) => {
  return (
    <section>
      {props.meteorites.map((meteorite) => {
        console.log(meteorite);
        const { name, mass, year } = meteorite;
        return <MeteoriteCard key={meteorite.id} />;
      })}
    </section>
  );
};

export default MeteoriteList;
