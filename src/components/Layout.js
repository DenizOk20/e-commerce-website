import Category from './Categories/Category';
import Navbar from './Navbar/Navbar'
import Slider from './Slider/Slider';

const Layout = () => {
    return(
        <div>
            <Navbar/>
            <Slider/>
            <Category/>
        </div>
    )
}

export default Layout;