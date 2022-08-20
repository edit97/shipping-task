import React, {useRef, useState} from "react";
import {Map, TileLayer} from "react-leaflet";

import Routing from "./RoutingMachine";

const mapDefaults = {
    lat: 40.1535005,
    lng: 44.4185274,
    zoom: 8,
}

function MapWrapper(props) {
    const [isMapInit, setIsMapInit] = useState(false)

    const mafRef = useRef()

   const saveMap = map => {
       mafRef.current = map;
       setIsMapInit(true);
    };

    const {lat, lng, zoom} = mapDefaults;
    const position = [lat, lng];

    return (
        <Map center={position} zoom={zoom} ref={saveMap} className={'map'}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            {isMapInit && props.locations &&  <Routing map={mafRef.current}
                                                       locations={props.locations}
            />}
        </Map>
    );
}

export default MapWrapper;
