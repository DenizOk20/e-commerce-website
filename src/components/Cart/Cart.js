import './Cart.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAdd, faMinus } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
    const cartProductColor = {
        width: "20px",
        height: "20px",
        borderRadius: "50%"
    }
  

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
                    <div className='cart-info'>
                        <div className='cart-product'>
                            <div className='product-details'>
                                <img className='cart-img' alt='' src='https://plus.unsplash.com/premium_photo-1672696218828-5d8cb59d1e82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dCUyMHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60'/>
                                <div className='detail-section'>
                                    <span><b>Product :</b> Oversize pink T-shirt</span>
                                    <span><b>Product Id :</b> 1234 </span>
                                    <div style={{...cartProductColor , backgroundColor:"pink"} }  color='pink' />
                                    <span><b>Product Size: </b> M</span>
                                </div>
                            </div>
                            <div className='price-detail'>
                                <div className='price-amount-detail'>
                                    <FontAwesomeIcon icon={faMinus}/>
                                    <span className='product-count'>2</span>
                                    <FontAwesomeIcon icon={faAdd}/>
                                </div>
                                <div className='cart-price-section'><b>Price: </b> 29$</div>
                            </div>
                        </div>
                        <hr/>
                        <div className='cart-product'>
                            <div className='product-details'>
                                <img className='cart-img' alt='' src='https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c2hvZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'/>
                                <div className='detail-section'>
                                    <span><b>Product :</b> NIKE SPORT DAİLY SHOES</span>
                                    <span><b>Product Id :</b> 1342 </span>
                                    <div style={{...cartProductColor , backgroundColor:"green"} }  color='pink' />
                                    <span><b>Product Size: </b> 36.5</span>
                                </div>
                            </div>
                            <div className='price-detail'>
                                <div className='price-amount-detail'>
                                    <FontAwesomeIcon icon={faMinus}/>
                                    <span className='product-count'>2</span>
                                    <FontAwesomeIcon icon={faAdd}/>
                                </div>
                                <div className='cart-price-section'><b>Price: </b> 60$</div>
                            </div>
                        </div>
                    </div>
                    <div className='cart-summary'>
                        <h1 className='summary-title'>ORDER SUMMARY</h1>
                        <div className='summary-info'>
                            <h1>Subtotal</h1>
                            <span>$ 89</span>
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
                            <span>$ 89</span>
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
