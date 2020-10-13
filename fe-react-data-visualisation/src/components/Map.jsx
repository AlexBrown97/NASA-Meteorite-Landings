import React from 'react'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'


const position = [51.505, -0.09]
const WorldMap = () => {
 return ( <div className='mapid'>
    <Map center={position} zoom={0}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
      />
      {/* <Marker position={position}>
        <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
      </Marker> */}
    </Map>
    </div>
  )}

export default WorldMap