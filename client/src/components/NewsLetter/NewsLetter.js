import './NewsLetter.css'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'

const NewsLetter = () => {
    return(
        <div className='NewsLetter'>
            <h1 className='news-title'>NewsLetter</h1>
            <span className='news-desc'>Get timely updates from your favorite products</span>
            <button className='send-button'>
                <input className='email-input' type='email' placeholder='Type your E-mail'/>
                <FontAwesomeIcon className='send-icon' icon={faPaperPlane}/>
            </button>
        </div>
    )
}

export default NewsLetter