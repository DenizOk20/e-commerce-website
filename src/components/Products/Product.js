import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHeart, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = ({item}) => {
    return(
        <div className='Product' key={item.id}>
            <img className='product-img' alt='' src={item.img}/>
            <div className='icons'>
                <FontAwesomeIcon className='icon heart' icon={faHeart}/>
                <FontAwesomeIcon className='icon shop' icon={faCartShopping}/>
                <FontAwesomeIcon className='icon magnify' icon={faMagnifyingGlass}/>
            </div>
        </div>
    )
}

export default Product