import React from 'react';
import { VendorAction } from '../vendor-action';
import { VendorInfoContainer } from "../../containers/vendor-info";
import './index.css';

export const Vendor = () => {
    return (
        <div className="vendor-container flex flex-column fill-container ml-30 mt-10">
            <VendorAction />
            <VendorInfoContainer />
        </div>
    )
}