import './SingleProduct.css'
import Navbar from "../Navbar/Navbar"
import NewsLetter from '../NewsLetter/NewsLetter'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus} from '@fortawesome/free-solid-svg-icons'
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { publicRequest } from '../../requestMethods'

const SingleProduct = () => {
    const location = useLocation();
    const id = location.pathname.split('/')[2]

    const [product,setProduct] = useState({});
    const [quantity,setQuantitiy] = useState(1);
    const [color,setColor] = useState(null);
    const [size,setSize] = useState(null);

    useEffect(() => {
        const getProduct = async () => {
            try{
                const res = await publicRequest.get('/products/find/' + id);
                setProduct(res.data)
            }
            catch {}
        }
        getProduct();
    },[id])

    const handleQuantity = (type) => {
        if (type === 'dec'){
            quantity >1 && setQuantitiy(quantity-1)
        }
        else{
            setQuantitiy(quantity + 1)
        }
    }

    const handleClick = () => {
        // update cart
    }

    return(
        <div>
            <Navbar/>
            <div className='single-product'>
                <div className='single-img'>
                    <img className='img' alt='' src={product.img} />
                </div>
                <div className='product-info'>
                    <h1 className='product-title'>{product.title}</h1>
                    <p className='product-desc'>{product.desc}</p>
                    <p className='product-price'>$ {product.price}</p>
                    
                    <div className='product-filter'>
                        <div className='filter-color'>
                            <span className='color-title' >Color</span>
                            {product.color?.map(c => (
                                <span className='color' key={c}  style={{backgroundColor:c }} onClick={() => setColor(c)}/>
                            ))}
                        </div>
                        <div className='size-selection-section'>
                            <span className='option-title'>Size</span>
                            <select onChange={(e) => setSize(e.target.value) } className='size-select'>
                                <option className='option' disabled selected>Size</option>
                                {product.size?.map(s => (
                                    <option className='option' key={s}>{s}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='add-card'>
                        <div className='choose-section'>
                            <FontAwesomeIcon onClick={() => handleQuantity('dec')} className='choose-product remove-product' icon={faMinus}/>
                            <span className='number-product'>{quantity}</span>
                            <FontAwesomeIcon onClick={() => handleQuantity('inc')} className='choose-product add-product' icon={faAdd}/>
                        </div>
                        <div className='add-section'>
                            <button onClick={handleClick} className='add-button'>Add to Card</button>
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