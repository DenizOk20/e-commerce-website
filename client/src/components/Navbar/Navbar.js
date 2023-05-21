import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import './Navbar.css'
import {useSelector} from 'react-redux'
import { loginSuccess } from "../../redux/userRedux";

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)
    return(
        <div className="Navbar">
            <nav>
                <Link to="/" className="nav-header font-mono-m">Deniz Store</Link>
                <div className="nav-search">
                    <div className="input-section">
                        <input className="input" name="search" type={Text} placeholder="Search..."/>
                        <FontAwesomeIcon for="search" className="search-icon" icon={faSearch}/>
                    </div> 
                    <button className="search-button">Search</button>
                </div>
                <div className="in-out">
                    {loginSuccess === true 
                    ? <Link to="/login" className="log-in">Log in</Link> 
                    : <Link to="/" className="log-in">Log out</Link>
                    }
                    <Link to="/register" className="Register">Register</Link>
                    <Link to="/cart" className="shop-bag-icon">
                        <FontAwesomeIcon icon={faShoppingBag}/>
                        <span>{quantity}</span>
                    </Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;