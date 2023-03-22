import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from "@fortawesome/free-solid-svg-icons"
import './Navbar.css'

const Navbar = () => {
    return(
        <div className="Navbar">
            <nav>
                <Link className="nav-header font-mono-m">Deniz Store</Link>
                <div className="nav-search">
                    <div className="input-section">
                        <input className="input" name="search" type={Text} placeholder="Search..."/>
                        <FontAwesomeIcon for="search" className="search-icon" icon={faSearch}/>
                    </div> 
                    <button className="search-button">Search</button>
                </div>
                <div className="in-out">
                    <Link className="log-in">Log in</Link>
                    <Link className="Register">Register</Link>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;