import React, {Component} from 'react';
import MapGL, { Marker, NavigationControl } from 'react-map-gl';
import { GoLocation } from 'react-icons/go';
import CompanyLogo from '../../CompanyLogo/CompanyLogo';
import '../FooterContacts.scss';

const TOKEN = 'pk.eyJ1IjoidmFsZW50aW5hNTMyIiwiYSI6ImNqb3cxaHVmdTFia2gza3M1MzNpcGowcTUifQ.aF2_XmuIhvKLDm4gPZGcUw';
const navStyle = {
  position: 'absolute',
  top: 0,
  left: 0,
  padding: '10px'
};

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: 350,
      latitude: 40.720820,
      longitude: -73.995062,
      zoom: 12.5,
      bearing: 0,
      pitch: 0,
    }
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        container = "map"
        className = "map"
        mapStyle = "mapbox://styles/valentina532/cjpo45o1p2qgk2spgiqjggnic"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => this.setState({ viewport })}
        scrollZoom = { false }
        doubleClickZoom = { true }
      >
        <Marker latitude={40.720820} longitude={-73.9950622} >
         <GoLocation className="mapMarkerStyle"/>
         <p className="mapLabelStyle">
           <CompanyLogo fill="#ffff" width="40" height="31" />
         </p>
        </Marker>
        <div className="nav" style={navStyle}>
           <NavigationControl onViewportChange={(viewport) => this.setState({ viewport })} />
        </div>
      </MapGL>
    );
  }
}
export default Map;

