import './Category.css'
import CategoryData from '../Datas/CategoryData'
import { Link } from 'react-router-dom'

const Category = () => {
    return(
        <div className='Category'>
        {CategoryData.map((category) => (
                <Link className='category-section'>
                    <img className='category-img' alt='' src={category.image} />
                    <h1 className='category-title'>{category.title}</h1>
                </Link>
            )) }
        </div>
    )
}

export default Category