import React from 'react';
import { useSelector } from 'react-redux';

const CardImage = () => {
    const {data} = useSelector((state) => state);

    return (
        <div>
            <img src = {data.avatar} />
        </div>
    )
}

export default CardImage;