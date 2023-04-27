import Category from './Categories/Category';
import Footer from './Footer/Footer';
import Navbar from './Navbar/Navbar'
import NewsLetter from './NewsLetter/NewsLetter';
import Products from './Products/Products';
import Slider from './Slider/Slider';

const Layout = () => {
    return(
        <div>
            <Navbar/>
            <Slider/>
            <Category/>
            <Products/>
            <NewsLetter/>
            <Footer/>
        </div>
    )
}

export default Layout;