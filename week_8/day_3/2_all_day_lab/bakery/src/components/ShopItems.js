import { useState } from "react";
import SingleItem from "./SingleItem";

const ShopItems = ({ items,addToBasket2 }) => {


    const [temp_basket,setTempBasket] = useState([])

    const addToBasket = (item )=> {
        // setBasket(item)
        const newBasket = [...temp_basket,item]
        setTempBasket(newBasket)
        addToBasket2(newBasket)  
    }

    const basketList = temp_basket.map((basket_item) => {
        return basket_item
    })

    console.log(basketList);

    const listItems = items.map((item,index) => {
        return <SingleItem key={index} item={item} addToBasket={addToBasket} />
    })

    return (
        <ul>
            {listItems}
        </ul>
    )
};


export default ShopItems;