import React from 'react';
import { useSelector } from 'react-redux';

const CardImage = () => {
    const imageData = useSelector((state) => state);

    return (
        <div>
            <img src = {imageData.data.avatar} />
        </div>
    )
}

export default CardImage;