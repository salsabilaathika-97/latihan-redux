import React, {useState} from 'react';
import CardImage from '../CardImage';
import CardName from '../CardName';

const Card = () => {
    
  const [data, setData] = useState({
    name: "Salsa",
    avatar: "https://reqres.in/img/faces/7-image.jpg"
  });

    return (
        <div>
            <CardName data={data} />
            <CardImage data={data} />
        </div>
    )
}

export default Card;