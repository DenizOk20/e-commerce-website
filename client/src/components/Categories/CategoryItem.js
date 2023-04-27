import './CategoryItem.css'
import { Link } from 'react-router-dom'

const CategoryItem = ({category}) => {
  return (
    <div className='category-item'>
        <Link to="/productlist" className='category-section' key={category.id}>
            <h1 className='category-title'>{category.title}</h1>
            <img className='category-img' alt='' src={category.image} />
        </Link>
    </div>
  )
}

export default CategoryItem