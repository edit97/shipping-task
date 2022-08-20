import React from "react";
import {connect} from "react-redux";
import ColumnResizer from "react-column-resizer";

import MapComponent from "./components/map/Map";
import List from "./components/list/List";

import {mapStateToProps} from "./redux/mapStateToProps";

function App({shippingList, selectedShippingId}) {
    const shipping = shippingList?.find(l=>l.id === selectedShippingId)
    const locations = shipping && {
        from: shipping.from,
        to: shipping.to
    }

    return <div>
        <table>
            <tbody>
            <tr>
                <td><List/></td>
                <ColumnResizer className="columnResizer" minWidth={0}/>
                <td>
                    <MapComponent locations={locations}/>
                </td>
            </tr>
            </tbody>
        </table>
    </div>
}


export default connect(mapStateToProps)(App)
