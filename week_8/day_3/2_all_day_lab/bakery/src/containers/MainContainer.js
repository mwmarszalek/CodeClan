import { useState } from "react";
import {BrowserRouter as Router, Routes, Route} from  "react-router-dom"

import Basket from "../components/Basket";
import NavBar from "../components/NavBar";
import ShopItems from "../components/ShopItems";
import Home from "../components/Home";
import Contact from "../components/Contact";




const DUMMY_DATA = [
    {name: "Croissant", price:2.99, category: "Pastries", Calories: 600},
    {name: "Donut", price:1.99, category: "Pastries", Calories: 300},
    {name: "Hot Cross-Bun", price:0.99, category: "Pastries", Calories: 600},
    {name: "Birthday Cake", price:14.99, category: "Cakes", Calories: 600},
    {name: "Halva", price:4.99, category: "Dessert", Calories: 600},
]


const MainContainer = props => {

    const [items,setItems] = useState(DUMMY_DATA);
    const [basket,setBasket] = useState([])

    const addToBasket2 = (basket)=> {
        setBasket(basket)
    }
    

    return (
        <Router>
            <NavBar basket={basket} />
            <Routes>
                <Route exact path="/" element={<Home />}/>
                <Route path="/items" element={<ShopItems items={items} addToBasket2={addToBasket2} />}/>
                <Route path="/basket" element={<Basket basket={basket}/>}/>
            </Routes>
        </Router>
    )
}

export default MainContainer;