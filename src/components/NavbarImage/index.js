import React from 'react';
import { useSelector } from 'react-redux';

const NavbarImage = () => {
    const imageData = useSelector((state) => state);

    return (
        <div>
            <img src = {imageData.data.avatar} />
        </div>
    )
}

export default NavbarImage;