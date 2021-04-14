import React, { useState } from 'react';
import { VendorLargeInfo } from '../vendor-large-info';
import { VendorShortInfo } from '../vendor-short-info';
import {IoChevronDownCircleOutline,IoChevronUpCircleOutline} from 'react-icons/io5';
import {FaRegCheckCircle} from 'react-icons/fa';
import './index.css';

export const VendorInfoContainer = () => {
  const [isVisible,toggleVisibility] = useState(false);
  return(
    <div className="vendor-info-container mt-20">
    <div className="vendor-primary-info-container flex flex-column">
    {
      isVisible && (
        <div className="vendor-title">
                Vendor
    </div>
      )
    }
        <div className="vendor-name-container flex ">
        <h1 className="vendor-name">
            Freguesia Cheese 
        </h1>
        <button className="expand-btn ml-10" onClick = {() => toggleVisibility(!isVisible)}>
          {!isVisible ? <IoChevronDownCircleOutline/> : (<IoChevronUpCircleOutline />)}
        </button>
        </div>
   {
     isVisible && ( <div className="vendor-status">
     <FaRegCheckCircle /> This vendor is mapped
 </div>)
   }
    </div>
    {isVisible ? <VendorLargeInfo /> : <VendorShortInfo />}
</div>
  )
}