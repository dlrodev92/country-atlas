import React from "react";
import "./Map.css";
import {
    GoogleMap,
    marker,
    directionsRenderer,
    circle,
    markerRenderer
} from "@react-google-maps/api";




function Map(props){
    return(
        <div className="map">
        <GoogleMap zoom={5} 
        center={{lat:props.lat, lng: props.lng}} 
        mapContainerClassName="map-container"
        overlaysEnabled={true}/>
        </div>
    )
}

export default Map;