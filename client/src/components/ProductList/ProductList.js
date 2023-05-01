import Navbar from "../Navbar/Navbar"
import Products from "../Products/Products"
import NewsLetter from "../NewsLetter/NewsLetter"
import Footer from "../Footer/Footer"
import './ProductList.css'
import { useLocation } from "react-router-dom"
import { useState } from "react"

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split('/')[2]
    const [filters,setFilters] = useState({})
    const [sort,setSort] = useState("newest")

    const handleFilters = (e) => {
    const value = e.target.value;
    setFilters({
        ...filters,
        [e.target.name] : value,
    });
    };
    console.log(filters);

    return(
        <div>
            <Navbar/>
            <h1 className="product-title">{cat}</h1>
            <div className="filter-container">
                <div className="filter">
                    <p className="filter-product">Filter Products</p>  
                    <select name="color" onChange={handleFilters}>
                        <option disable > Color</option>
                        <option>black</option>
                        <option>red</option>
                        <option>yellow</option>
                        <option>white</option>
                        <option>orange</option>
                        <option>brawn</option>
                    </select>
                    <select name="size" onChange={handleFilters}>
                        <option disable>XS</option>
                        <option>S</option>
                        <option>M</option>
                        <option>L</option>
                        <option>XL</option>
                    </select>
                </div>
                <div className="filter">
                    <p className="sort">Sort Products</p>
                    <select onChange={(e) => setSort(e.target.value)}>
                        <option value="newest" disable>
                            Newest
                        </option>
                        <option value="asc">
                            Price (asc)
                        </option>
                        <option value="desc">
                            Price (desc)
                        </option>
                    </select>
                </div>
                
            </div>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default ProductList