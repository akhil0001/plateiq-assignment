import React from 'react';
import './index.css';

const getColumnsData = (data) => {
    return data.reduce((acc,curr) => {
        acc[curr['title']] = curr['value'];
        return acc;
    },{})
}

export const VendorShortInfo = (props) => {
    const {data} = props;
    if(!data){
        return null
    }
    const columnsData = getColumnsData(data);
    return (
        <div className="vendor-info--short flex mt-20">
            <div className="vendor-id short-info-child">
                {columnsData['invoice no']}
            </div>
            <div className="vendor-date short-info-child">
            {columnsData['invoice date']}
            </div>
            <div className="vendor-restaurant short-info-child">
            {columnsData['restaurant']}
            </div>
            <div className="vendor-remarks short-info-child">
            {columnsData['remarks']}
            </div>
            <div className="vendor-total-bill short-info-child">
            {columnsData['total']}
            </div>
        </div>
    )
}