import './Cart.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartProductColor = {
        width: "20px",
        height: "20px",
        borderRadius: "50%"
    }
  
    const cart = useSelector(state => state.cart);

    return(
        <div className='cart-container'>
            <Navbar/>
            <div className='cart-section'>
                <h1 className='top-title'>YOUR BAG</h1>
                <div className='top-cart'>
                    <button className='continue' >CONTİNUE SHOPPING</button>
                    <div className='top-texts'>
                        <span className='top-text'>Shopping Bag(2)</span>
                        <span className='top-text'>Your Wishlist(0)</span>
                    </div>
                    <button className='checkout'>CHECKOUT NOW</button>
                </div> 
                <div className='bottom-cart'>
                    <div className='bc-all'>

                    {cart.products.map(product => (
                        <div className='cart-info'>
                            <div className='cart-product'>
                            <div className='product-details'>
                                <img className='cart-img' alt='' src={product.img} />
                                <div className='detail-section'>
                                    <span><b>Product :</b> {product.title}</span>
                                    <span><b>Product Id :</b> {product._id} </span>
                                    <span className='cart-color-detail' key={product.color}  style={{backgroundColor: product.color, width: "20px",height: "20px",borderRadius: "50%" }}></span>
                                    <span><b>Product Size: </b> {product.size}</span>
                                </div>
                            </div>
                            <div className='price-detail'>
                                <div className='price-amount-detail'>
                                    <FontAwesomeIcon icon={faMinus}/>
                                    <span className='product-count'>{product.quantity}</span>
                                    <FontAwesomeIcon icon={faAdd}/>
                                </div>
                                <div className='cart-price-section'><b>Price: </b>$ {product.price * product.quantity}</div>
                            </div>
                        </div>
                        <hr/>
                    </div>
                    ))}
                    </div>
                    <div className='cart-summary'>
                        <h1 className='summary-title'>ORDER SUMMARY</h1>
                        <div className='summary-info'>
                            <h1>Subtotal</h1>
                            <span>$ {cart.total}</span>
                        </div>
                        <div className='summary-info'>
                            <h1>Estimated Shipping</h1>
                            <span>$ 5.90</span>
                        </div>
                        <div className='summary-info'>
                            <h1>Discount Shipping</h1>
                            <span>$ -5.90</span>
                        </div>
                        <div className='summary-info total-cart'>
                            <h1>Total</h1>
                            <span>$ {cart.total}</span>
                        </div>
                        <button className='checkout-button'>CHECKOUT NOW</button>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Cart
