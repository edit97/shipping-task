import React from "react";
import {connect} from "react-redux";
import {Select} from "antd";

import {mapStateToProps} from "../../redux/mapStateToProps";
import {UpdateSelectedShipping, UpdateShippingAddress} from "../../redux/actions";

import "./shippingCard.css";

const {Option} = Select;

function ShippingCard({
                          data,
                          locations,
                          selectedShippingId,
                          UpdateShippingAddress,
                          UpdateSelectedShipping
                      }) {

    const changeFrom = (locationId) => {
        UpdateShippingAddress(data.id, locationId, 'from')
    };
    const changeTo = (locationId) => {
        UpdateShippingAddress(data.id, locationId, 'to')
    };

    const selectShipping = () => {
        UpdateSelectedShipping(data.id)
    };


    return <div className={`shipping-item ${selectedShippingId === data.id ? "selected": ''}`} key={data.id} onClick={selectShipping}>
        <div className="shipping-info">
            <span className={'shipping-id'}>N: {data.id}</span>
            <span className={'shipping-date'}>Date: {data.date}</span>
        </div>
        <div className="locations">
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={changeFrom}
                value={data.from.id}
            >
                {
                    !!locations?.length && locations?.filter(l => l.id !== data.to.id)?.map(item => {
                        return <Option value={item.id} key={item.id}>{item.name}</Option>
                    })
                }
            </Select>
            <Select
                showSearch
                placeholder="Select a person"
                optionFilterProp="children"
                onChange={changeTo}
                value={data.to.id}
            >
                {
                    !!locations?.length && locations?.filter(l => l.id !== data.from.id)?.map(item => {
                        return <Option value={item.id} key={item.id}>{item.name}</Option>
                    })
                }
            </Select>
        </div>
    </div>
}

const mapDispatchToProps = {
    UpdateShippingAddress,
    UpdateSelectedShipping
}
export default connect(mapStateToProps, mapDispatchToProps)(ShippingCard)