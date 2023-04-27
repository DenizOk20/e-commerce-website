import { useState} from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import './Slider.css'
import SlideData from "../Datas/SlideData";


const Slider = () => {

    const [currentSlide,setCurrentSlide] = useState(0)

    function handlePrevClick(){
        setCurrentSlide(currentSlide === 0 ? SlideData.length - 1 : currentSlide - 1)
    }

    function handleNextClick(){
        setCurrentSlide(currentSlide === SlideData.length - 1 ? 0 : currentSlide + 1)
    }

    
    return(
        <div className="Slider">
            <Link className="slider-section">
                <FontAwesomeIcon className="arrows left-arrow" icon={faArrowLeft} onClick={handlePrevClick} />
                    {SlideData.map((slide,index) => (
                        <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
                            <img className="slide-img" alt={slide.title} src={require(`../../../public/Images/${slide.slideImg}`)}/>
                            <div className="slide-infos">
                                <h1>{slide.slideInfo}</h1>
                                <p>{slide.description}</p>
                            </div>
                        </div>
                    ))}
                <FontAwesomeIcon className="arrows right-arrow" icon={faArrowRight} onClick={handleNextClick}/>
            </Link>
        </div>
    )
}

export default Slider;