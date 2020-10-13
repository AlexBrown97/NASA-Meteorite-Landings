import React from "react";
import MeteoriteCards from "../components/MeteoriteCards";

const MeteoriteList = (props) => {
  return (
    <section>
      {props.meteorites.map((meteorite) => {
        console.log(meteorite);
        return <MeteoriteCards key={meteorite.id} name={meteorite.name} year={meteorite.year.slice(0, 4)} mass={meteorite.mass} setSelectedMeteor={props.setSelectedMeteor}/>;
      })}
    </section>
  );
};

export default MeteoriteList;
