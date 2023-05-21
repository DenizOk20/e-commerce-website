import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch, faShoppingBag} from "@fortawesome/free-solid-svg-icons"
import './Navbar.css'
import {useDispatch, useSelector} from 'react-redux'
import { loginSuccess, logout, logoutSuccess } from "../../redux/userRedux";
import { Logout } from "../../redux/apiCalls";

const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity)
    console.log(quantity)
    const dispatch = useDispatch();
    const currentUser = useSelector(state => state.user.currentUser);
    const handleClick = (e) => {
        dispatch(logoutSuccess());
    }

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
                    {currentUser === null
                    ? (<Link to="/login" className="log-in">Log in</Link> )
                    : (<Link onClick={handleClick} to="/" className="log-in">Log out</Link>)
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