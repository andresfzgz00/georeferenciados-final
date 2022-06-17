import GoogleMapReact, { Maps} from 'google-map-react';
import { FC } from 'react';

import { MAPS_KEY } from '../constants/google'

interface MapProps {
    lat: number,
    lng: number,
    zoom?: number
}

const Marker: FC<MapProps> = ({ lat, lng }) => {
    return (
        <h1>Hola</h1>
    )
}

const Map: FC<MapProps> = ({ lat, lng, zoom = 18 }) => {
    const renderMarkers = (map: any, maps: any) => {
        let marker = new maps.Marker({
            position: { lat, lng },
            map,
            title: 'Hello World!'
        });
    }

    return (
        <div style={{ height: 500, width: "100%" }} className="mb-5">
            <GoogleMapReact
                bootstrapURLKeys={{ key: MAPS_KEY }}
                defaultCenter={{ lat, lng }}
                onGoogleApiLoaded={({map, maps}) => renderMarkers(map, maps)}
                defaultZoom={zoom}
            />
        </div>
    )
}

export default Map