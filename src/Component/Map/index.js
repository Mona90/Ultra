import React from "react";
import { compose } from "recompose";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Geocode from "react-geocode";
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

// const Marker = styled.div`
//   position: absolute;
//   bottom: 100%;
//   left: 50%;
//   width: 30px;
//   height: 30px;
//   background-image: url('https://cdn-icons-png.flaticon.com/512/684/684908.png');
//   background-size:cover;
//   background-position:center;
//   user-select: none;
//   transform: translateX(-50%);
//   cursor: ${(props) => (props.onClick ? 'pointer' : 'default')};
//   &:hover {
//     z-index: 1;
//   }
// `;

// const Marker = ({ text, onClick }) => (
//   <Wrapper
//     alt={text}
//     onClick={onClick}
//   />
// );

// Marker.defaultProps = {
//   onClick: null,
// };

// Marker.propTypes = {
//   onClick: PropTypes.func,
//   text: PropTypes.string.isRequired,
// };
const MapWithAMarker = compose(withScriptjs, withGoogleMap)(props =>{
  return(
<GoogleMap
          defaultCenter={props.defaultCenter}
          defaultZoom={props.zoom}
        >
          
          <Marker
          position={props.defaultCenter}
          draggable={true}
          onDragEnd={props.drag}
          // icon={{
          //   url: 'https://cdn0.iconfinder.com/data/icons/different-transportation/64/transport_caar-512.png',
          // }}
        > 
        {/* <img src="https://cdn0.iconfinder.com/data/icons/different-transportation/64/transport_caar-512.png" style={{width:"130px", height:"130px"}} alt="icon"/> */}
        </Marker> 
 
        </GoogleMap>
  )

})
class GoogleMaps extends React.Component {
  state = {
    center: {
      lat: 30.033333,
      lng: 31.233334
    },
    zoom: 11,
    address:'',
    key:'',
    urlKey:'https://maps.googleapis.com/maps/api/js?key=',
    error: false
  };
  componentDidMount(){
    Geocode.setApiKey(`${this.state.key}`);
    Geocode.fromLatLng(`${this.state.center.lat}`, `${this.state.center.lng}`).then(
      (response) => {
        const address = response.results[0].formatted_address;
        this.setState({address: address})
      },
      (error) => {
        console.error(error);
        this.setState({error : true})
      }
    
  )
  }
  onMarkerDragEnd = (event) => {
    let newLat = event.latLng.lat(),
        newLng = event.latLng.lng();

    Geocode.fromLatLng(newLat, newLng).then(
        response => {
            const address = response.results[0].formatted_address;
                // addressArray = response.results[0].address_components,
                // city = this.getCity(addressArray),
                // area = this.getArea(addressArray),
                // state = this.getState(addressArray);
            this.setState({
                address:  address ,
                // area: (area) ? area : '',
                // city: (city) ? city : '',
                // state: (state) ? state : '',
                // markerPosition: {
                //     lat: newLat,
                //     lng: newLng
                // },
                center: {
                    lat: newLat,
                    lng: newLng
                },
            })
        },
        error => {
            console.error(error);
        }
    );
};

  render() { 
    
    return (
      <div style={{height:'100vh'}}>
        <p className="text-center" style={{marginTop:'50px'}}>Please drag the marker to change address in the input</p>
        <input type="text" value={this.state.address} style={{width:"50%",margin:'20px auto', display:'block'}}/>
        {this.state.error ? 
        <h2 style={{width:"50%",margin:'20px auto 50px', color:'red'}}>please insert google key in the code to run the map</h2>:
      <MapWithAMarker
      defaultCenter={this.state.center}
      drag={this.onMarkerDragEnd}
      zoom={this.state.zoom}
      googleMapURL={this.state.urlKey}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `100vh` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      />
    }
       </div>
    );
  }
}
 
export default GoogleMaps;

