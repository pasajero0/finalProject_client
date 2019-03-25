import React, {Component} from 'react';
import MapGL, {Marker } from 'react-map-gl';
import { GoLocation } from 'react-icons/go';
import CompanyLogo from '../../CompanyLogo/CompanyLogo';
import '../Footer.scss';

const TOKEN = 'pk.eyJ1IjoidmFsZW50aW5hNTMyIiwiYSI6ImNqb3cxaHVmdTFia2gza3M1MzNpcGowcTUifQ.aF2_XmuIhvKLDm4gPZGcUw';

class Map extends Component {
  state = {
    viewport: {
      width: '100%',
      height: 350,
      latitude: 40.720820,
      longitude: -73.995062,
      zoom: 12.5
    }
  };

  render() {
    return (
      <MapGL
        {...this.state.viewport}
        className = "map"
        mapStyle = "mapbox://styles/valentina532/cjpo45o1p2qgk2spgiqjggnic"
        mapboxApiAccessToken={TOKEN}
        onViewportChange={(viewport) => this.setState({viewport})}
      >
        <Marker latitude={40.720820} longitude={-73.9950622} >
         <GoLocation className="mapMarkerStyle"/>
         <p className="mapLabelStyle"><CompanyLogo fill="#ffff" width="40" height="31"/></p>
        </Marker>
      </MapGL>
    );
  }
}
export default Map

