import { useState } from "react";

const Basket = ({ basket }) => {

    const [updatedBasket,setUpdatedBasket] = useState(basket)

    

    const basketItems = basket.map((basketItem, index) => {
        return <li key={index}>{basketItem.name} <button>Remove from basket</button></li>
    })



    return (
        <div>
            <h1>Basket:</h1>
            <ul>
                {basketItems}
            </ul>
        </div>
    )
};


export default Basket;

