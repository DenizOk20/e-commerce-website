import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Footer.css'
import { faCcDiscover, faCcMastercard, faCcPaypal, faCcVisa, faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocation, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

const Footer = () => {
    return(
        <div className='footer-container'>
            <div className='footer'>
                <div className='left-side'>
                    <h2 className='company-name'>Deniz Store</h2>
                    <p className='company-desc'>This company was created by Deniz Ök in 2023. Our mission is spreading safe and suitable 
                    shopping. Thank you very much for shopping from us. Quality services is our responsibility.</p>
                    <h3 className='social-info'>Social Media</h3>
                    <div className='social-media-icons'>
                        <FontAwesomeIcon className='footer-icon media' icon={faInstagram}/>
                        <FontAwesomeIcon className='footer-icon media' icon={faTwitter}/>
                        <FontAwesomeIcon className='footer-icon media' icon={faYoutube}/>
                        <FontAwesomeIcon className='footer-icon media' icon={faFacebook}/>
                    </div>
                </div>
                <div className='center'>
                    <h3 className='site-links'>Useful Links</h3>
                    <ul className='links'>
                        <li className='link'><a href='/'>About us</a></li>
                        <li className='link'><a href='/'>Home</a></li>
                        <li className='link'><a href='/register'>Register</a></li>
                        <li className='link'><a href='/login'>Login</a></li>
                        <li className='link'><a href='/'>Categories</a></li>
                    </ul>
                </div>
                <div className='right-side'>
                    <h3 className='contact'>Contact</h3>
                    <div className='contact-info'>
                        <div className='contact-icons'>
                            <FontAwesomeIcon icon={faLocationDot}/>
                            <p>Yeni mh. Atatürk cd. Cumhuriyet sk. no:19/23 Ankara</p>
                        </div>
                        <div className='contact-icons'>
                            <FontAwesomeIcon icon={faPhone}/>
                            <p>+90 234 567 7890</p>
                        </div><div className='contact-icons'>
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <p>DenizStore@gmail.com</p>
                        </div>
                    </div>
                    <div className='credit-cards'>
                        <FontAwesomeIcon className='footer-icon' icon={faCcMastercard}/>
                        <FontAwesomeIcon className='footer-icon' icon={faCcVisa}/>
                        <FontAwesomeIcon className='footer-icon' icon={faCcPaypal}/>
                        <FontAwesomeIcon className='footer-icon' icon={faCcDiscover}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer