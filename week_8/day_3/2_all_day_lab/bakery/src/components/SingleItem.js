import { useState } from "react";

const SingleItem = ({ item, addToBasket }) => {


    const handleClick = () => {
        addToBasket(item);
    }




    return (
        <li><b>Name:</b> {item.name} <b>Price:</b> £{item.price} <b>Category:</b> {item.category} <b>Calories:</b> {item.Calories} <button onClick={handleClick}>Add to basket</button></li>
    )
};


export default SingleItem;