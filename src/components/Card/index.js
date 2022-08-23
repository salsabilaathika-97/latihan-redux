import React, {useState} from 'react';
import CardImage from '../CardImage';
import CardName from '../CardName';
import { useSelector } from 'react-redux';
import { useStore } from 'react-redux';

const Card = () => {

    const reduxData = useSelector((state) => state);
    
    const [data, setData] = useState({
        name: "Salsa",
        avatar: "https://reqres.in/img/faces/7-image.jpg"
    });

    console.log("Data", reduxData);

    return (
        <div>
            <CardName data={data} />
            <CardImage data={data} />
        </div>
    )
}

export default Card;