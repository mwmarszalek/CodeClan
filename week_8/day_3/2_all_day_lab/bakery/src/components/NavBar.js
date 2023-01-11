import { Link } from "react-router-dom"

const NavBar = props => {
    return (
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/items">Items</Link>
            </li>
            <li>
                <Link to="/basket">Basket</Link>
            </li>
            <li>
                <Link to="/contact">Contact Us</Link>
            </li>
        </ul>
    )
};


export default NavBar;