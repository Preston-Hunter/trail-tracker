import { Loader } from "@googlemaps/js-api-loader"
import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import {key} from "../../key.json"
function Map({trails}){
 
    const googleKey = key

    const containerStyle = {
        width: '800px',
        height: '800px'
      };
      
      const center = {
        lat: 39.645,
        lng: -105.523
      };
      
    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        // replaced key cuz it was plaintext lol
        googleMapsApiKey: googleKey
    })
      
    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        // This is just an example of getting and using the map instance!!! don't just blindly copy!
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);        
        setMap(map)
    }, [])
      
    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])
    
    return isLoaded ? (
        <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
        >
            {trails.map((trail)=> {return <Marker clickable = {true} title = {trail.name} key = {trail.id} position={{lat:trail.lattitude, lng:trail.longitude}}></Marker>})}
            
            { /* Child components, such as markers, info windows, etc. */ }
            <></>
        </GoogleMap>
    ) : <h1>loading...</h1>

}

export default Map