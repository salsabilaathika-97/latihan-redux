import React, {useState} from 'react';
import NavbarImage from '../NavbarImage';
import NavbarName from '../NavbarName';

const Navbar = () => {
    
  const [data, setData] = useState({
    name: "Salsa",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  });

    return (
        <div style = {{ display: "flex", justifyContent: 'space-between' }}>
            <NavbarName data={data} />
            <NavbarImage data={data} />
        </div>
    )
}

export default Navbar;