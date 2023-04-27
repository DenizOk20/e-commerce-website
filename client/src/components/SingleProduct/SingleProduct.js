import './SingleProduct.css'
import Navbar from "../Navbar/Navbar"
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus} from '@fortawesome/free-solid-svg-icons'

const SingleProduct = () => {
    
    return(
        <div>
            <Navbar/>
            <div className='single-product'>
                <div className='single-img'>
                    <img className='img' alt='' src='https://images.pexels.com/photos/6066929/pexels-photo-6066929.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                </div>
                <div className='product-info'>
                    <h1 className='product-title'>Defacto Slim Fit T-shirt</h1>
                    <p className='product-desc'>Erkek Yeşil Basic Pamuklu Polo Yaka T-shirt E001004</p>
                    <p className='product-price'>$ 20</p>
                    
                    <div className='product-filter'>
                        <div className='filter-color'>
                            <span className='color-title' >Color</span>
                            <span className='color' style={{backgroundColor: "green"}}/>
                            <span className='color' style={{backgroundColor: "#fbf2f2"}}/>
                            <span className='color' style={{backgroundColor: "black"}}/>
                            <span className='color' style={{backgroundColor: "blue"}}/>
                        </div>
                        <div>
                            <select className='size-select'>
                                <option className='option' disabled selected>Size</option>
                                <option className='option'>XS</option>
                                <option className='option'>S</option>
                                <option className='option'>M</option>
                                <option className='option'>L</option>
                                <option className='option'>XL</option>
                            </select>
                        </div>
                    </div>
                    <div className='add-card'>
                        <div className='choose-section'>
                            <FontAwesomeIcon className='choose-product remove-product' icon={faMinus}/>
                            <span className='number-product'>1</span>
                            <FontAwesomeIcon className='choose-product add-product' icon={faAdd}/>
                        </div>
                        <div className='add-section'>
                            <button className='add-button'>Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default SingleProduct