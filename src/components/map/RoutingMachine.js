import {MapLayer, withLeaflet} from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "lrm-google";

class Routing extends MapLayer {
    constructor(props) {
        super(props);
    }
    createLeafletElement() {
        const { map } = this.props;
        let control = L.Routing.control({
            show: false,
            lineOptions: {
                styles: [
                    {
                        color: "blue",
                        opacity: 1,
                        weight: 3
                    }
                ]
            },
            addWaypononeints: false,
            draggableWaypoints: false,
            fitSelectedRoutes: true,
            showAlternatives: false
        });
        this.control = control;
        let leafletElement = control.addTo(map.leafletElement)
        leafletElement.hide();
       return control.getPlan();
    }

    componentDidMount() {
        super.componentDidMount();
        const { locations } = this.props;
        this.control.setWaypoints([L.latLng(locations.from.lat, locations.from.lng),
            L.latLng(locations.to.lat, locations.to.lng)])
    }

    componentDidUpdate(prevProps) {
        super.componentDidUpdate(prevProps);
        const {locations} = this.props;

        this.control.setWaypoints([L.latLng(locations.from.lat, locations.from.lng),
            L.latLng(locations.to.lat, locations.to.lng)])
    }
}

export default withLeaflet(Routing);
