import './Category.css'
import CategoryData from '../Datas/CategoryData'
import CategoryItem from './CategoryItem'

const Category = () => {
    return(
        <div className='Category'>
        {CategoryData.map((category) => (
                <CategoryItem category={category} key={category.id}/>
            )) }
        </div>
    )
}

export default Category