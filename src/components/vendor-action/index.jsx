import React from 'react';
import {IoIosMail,IoMdArrowDropdown} from 'react-icons/io'
import './index.css';

export const VendorAction = () => (
<div className="vendor-action-container flex">
    <a className="vendor-action-mail-btn" href="mailto:iamakhilsairam@gmail.com" aria-label="mail to vendor"> <IoIosMail className="vendor-action-mail-icon"/> Direct </a>
    <div className='vendor-action-btn-container flex'>
        <button className="btn btn-secondary ml-10">More <IoMdArrowDropdown className="btn-secondary-icon" /></button>
        <button className="btn btn-primary ml-10">Approve</button>
    </div>
</div>
);