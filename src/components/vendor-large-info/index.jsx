import React from 'react';
import { VendorInfoItem } from '../vendor-info-item';
import './index.css';

const vendorInfo = [{
    title: 'invoice no',
    value: '00003542'
},
{
    title: 'invoice type',
    value: 'Reciept'
},
{
    title: 'Restaurant',
    value: `Monty's cheese Shop`
},
{
    title: 'Sub Total',
    value: '$1300'
},
{
    title: 'Posting Date',
    value: 'Jul 14 2017'
},
{
    title: 'Invoice Date',
    value: 'Jul 09 2017'
},
{
    title: 'Due Date',
    value : 'Sep 09,2017'
},
{
    title: 'Total',
    value: '$10,000.00'
}
]
export const VendorLargeInfo = () => {
    return(
        <div className="vendor-info--large grid fill-container mt-20">
           {
               vendorInfo.map(({title,value},index) => (
                   <VendorInfoItem info={value} key={index} title={title}/>
               ))
           }
        </div>
    )
}