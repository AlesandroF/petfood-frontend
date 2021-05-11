import GoogleMapReact from 'google-map-react';
import Marker from '../marker';
import './styles.css'

const Map = () => {
    return (
        <div className="container-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyB4sTvnkfBOWqnWCzmS5_7i-1__3k2r8h4' }}
                center={{
                    lat: -23.561684,
                    lng: -46.625378,
                }}
                defaultZoom={15}
            >
                <Marker lat={-23.561684} lng={-46.625378} />
            </GoogleMapReact>
        </div>
    )
}

export default Map;