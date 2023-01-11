import { useState } from "react";

const SingleItem = ({item, addToBasket }) => {


    const handleClick = () => {
      addToBasket(item);

    }

  

    
    return (
        <li>Name: {item.name} Price: {item.price} Category: {item.category} Calories: {item.calories} <button onClick={handleClick}>Add to basket</button></li>
    )
};


export default SingleItem;