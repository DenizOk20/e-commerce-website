import './Products.css'
import FavoriteProducts from '../Datas/FavoriteProducts'
import Product from './Product'

const Products = () => {
    return(
        <div className='Products'>
                {FavoriteProducts.map((item) => (
                    <Product item={item} key={item.id}/>
                ))}
        </div>
    )
}

export default Products