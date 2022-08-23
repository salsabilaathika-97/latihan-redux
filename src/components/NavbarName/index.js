import React from 'react';
import { useSelector } from 'react-redux';

const NavbarName = () => {
    const nameData = useSelector((state) => state);

    return (
        <div>
            <h1>{nameData.data.name}</h1>
        </div>
    )
}

export default NavbarName;