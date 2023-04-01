import Category from './Categories/Category';
import Navbar from './Navbar/Navbar'
import Products from './Products/Products';
import Slider from './Slider/Slider';

const Layout = () => {
    return(
        <div>
            <Navbar/>
            <Slider/>
            <Category/>
            <Products/>
        </div>
    )
}

export default Layout;