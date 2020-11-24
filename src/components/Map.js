import GoogleMapReact from 'google-map-react';
const dotenv = require('dotenv');

console.log(process.env);

dotenv.config();

const Map = ({ center, zoom }) => {
  return (
    <div className='map'>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        defaultCenter={center}
        defaultZoom={zoom}
      ></GoogleMapReact>
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 53.480759,
    lng: -2.242631,
  },
  zoom: 6,
};

export default Map;
