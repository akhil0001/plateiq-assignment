import React from 'react';
import placeHolderImage from '../../placeholder-invoice.png';
import './index.css';

console.log(placeHolderImage)
export const ImageViewer = ({imgSrc, imgAlt}) => {
    return (
        (
            <div className="image-viewer-container fill-container flex flex-centered">
                <img width ={500} className="image fill-container" src={placeHolderImage}  alt={imgAlt}/>
            </div>
        )
    )
}