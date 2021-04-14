import React from 'react';
import './index.css';

export const VendorInfoItem = ({title='',info=''}) => {
    return (
        <div className="vendor-info-item flex flex-column">
            <div className="vendor-info-item--title mt-10">
        {title}
            </div>
            <div className="vendor-info-item--info">
        {info}
            </div>
        </div>
    );
}