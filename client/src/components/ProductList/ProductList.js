import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products"
import NewsLetter from "../NewsLetter/NewsLetter"
import Footer from "../Footer/Footer"
import './ProductList.css'

const ProductList = () => {
    return(
        <div>
            <Navbar/>
            <h1 className="product-title">Dresses</h1>
            <div className="filter-container">
                <div className="filter">
                    <p className="filter-product">Filter Products</p>  
                    <select>
                        <option disable selected>
                            Color
                        </option>
                        <option>
                            Black
                        </option>
                        <option>
                            red
                        </option>
                        <option>
                            yellow
                        </option>
                    </select>
                    <select>
                        <option disable selected>
                            XS
                        </option>
                        <option>
                            S
                        </option>
                        <option>
                            M
                        </option>
                        <option>
                            L
                        </option>
                        <option>
                            XL
                        </option>
                    </select>
                </div>
                <div className="filter">
                    <p className="sort">Sort Products</p>
                    <select>
                        <option disable selected>
                            Newest
                        </option>
                        <option>
                            Price (asc)
                        </option>
                        <option>
                            Price (desc)
                        </option>
                    </select>
                </div>
                
            </div>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default ProductList