import React from 'react';

const NavbarImage = ({data}) => {
    return (
        <div>
            <img src = {data.avatar} />
        </div>
    )
}

export default NavbarImage;