import React, {Component} from 'react';
import MapGL, {Marker } from 'react-map-gl';
import { GoLocation } from "react-icons/go";
import './Footer.scss';

const TOKEN = 'pk.eyJ1IjoidmFsZW50aW5hNTMyIiwiYSI6ImNqb3cxaHVmdTFia2gza3M1MzNpcGowcTUifQ.aF2_XmuIhvKLDm4gPZGcUw';

class Map extends Component {

  state = {
    viewport: {
      width: '100%',
      height: 400,
      latitude: 40.719418,
      longitude: -73.940850,
      zoom: 12
    }
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
     <Marker latitude={40.721216} longitude={-73.997067} >
         <GoLocation className="mapMarkerStyle"/><p>
             UNO
         </p>
        </Marker>
      </MapGL>
    );
  }
}
export default Map

