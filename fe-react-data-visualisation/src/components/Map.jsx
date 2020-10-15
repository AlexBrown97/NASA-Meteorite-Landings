import React from "react";
import { Map, Marker, TileLayer } from "react-leaflet";

const position = [51.505, -0.09];
const WorldMap = (props) => {
  return (
    <div
      className="mapid"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Map center={position} zoom={0}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        {props.lat ? (
          <Marker position={[props.lat, props.long]}></Marker>
        ) : undefined}
      </Map>
    </div>
  );
};

export default WorldMap;
