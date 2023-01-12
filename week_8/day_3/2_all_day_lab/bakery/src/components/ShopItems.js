import { useState } from "react";
import SingleItem from "./SingleItem";

const ShopItems = ({ items, addToBasket2 }) => {


    const [temp_basket, setTempBasket] = useState([])

    const addToBasket = (item) => {
        const newBasket = [...temp_basket, item]
        setTempBasket(newBasket)
        addToBasket2(newBasket)
    }

    const basketList = temp_basket.map((basket_item) => {
        return basket_item
    })


    const listItems = items.map((item, index) => {
        return <SingleItem key={index} item={item} addToBasket={addToBasket}  />
    })

    const itemsInBasket = temp_basket.length

    
    return (
        <div>
            <h1>Items to buy:</h1>
            <ul>
                {listItems}
            </ul>
        </div>
    )
};


export default ShopItems;