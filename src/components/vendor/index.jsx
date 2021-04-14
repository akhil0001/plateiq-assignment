import React from 'react';
import { VendorActionContainer } from '../vendor-action-container';
import { VendorInfoContainer } from "../vendor-info-container";
import './index.css';

export const Vendor = () => {
    return (
        <div className="vendor-container flex flex-column fill-container ml-30 mt-10">
            <VendorActionContainer />
            <VendorInfoContainer />
        </div>
    )
}