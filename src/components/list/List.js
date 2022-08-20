import React, {useEffect, useState} from "react";
import {connect} from "react-redux";

import './list.css'

import {mapStateToProps} from "../../redux/mapStateToProps";
import {GetShippingData} from "../../redux/actions";

import ShippingCard from "../shippingCard/ShippingCard";
import {LoadingOutlined} from '@ant-design/icons';

function List({shippingList, GetShippingData}) {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        GetShippingData().finally(() => {
            setLoading(false)
        });
    }, []);
    return <div>
        <h1>Shipping list</h1>
        <div className="shipping-list">
            {!loading ?
                shippingList?.map(item => {
                    return <ShippingCard key={item.id} data={item}/>
                }) :
                <div className={'loading'}><LoadingOutlined /></div>
            }
        </div>
    </div>
}

const mapDispatchToProps = {GetShippingData}
export default connect(mapStateToProps, mapDispatchToProps)(List)
