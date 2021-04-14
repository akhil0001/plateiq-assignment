import React from 'react';
import { VendorInfoItem } from '../vendor-info-item';
import './index.css';


export const VendorLargeInfo = (props) => {
    const {data} = props;
    if(!data){
        return null;
    }
    return(
        <div className="vendor-info--large grid fill-container mt-20">
           {
               data.map(({title,value},index) => (
                   <VendorInfoItem info={value} key={index} title={title}/>
               ))
           }
        </div>
    )
}