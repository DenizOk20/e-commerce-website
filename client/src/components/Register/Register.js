import { useState } from 'react'
import './Register.css'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/apiCalls'
import { registerSuccess } from '../../redux/registerRedux'
import { useNavigate } from 'react-router-dom'

const Register = () => {
    const cart = useSelector(state => state.register);
    const [inputs,setInputs] = useState({})
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const handleChange = (e) => {
        setInputs(prev => {
          return {...prev, [e.target.name]:e.target.value}
        })
      }
    
      const handleClick = async (e) => {
        e.preventDefault();
        try {
          await register(dispatch,inputs); 
          if (registerSuccess()) {
            // navigate('/');
          }
        } catch (err) {
          console.log(err);
        }
      };

    return(
        <div className='register-container'>
            <div className='register-section'>
                <h1 className='register-title'>Create An Account</h1>
                <form className='info-form'>
                    <input type="text" placeholder="Name" onChange={handleChange} />
                    <input type="text" placeholder="Last Name" onChange={handleChange}/>
                    <input type="text" placeholder="User Name" onChange={handleChange}/>
                    <input type="email" placeholder="e-mail" onChange={handleChange}/>
                    <input type="password" placeholder="Password" onChange={handleChange}/>
                    <input type="password" placeholder="Confirm Password" onChange={handleChange}/>
                </form>
                <span className='register-desc'>By creating an acoount, I consent to the processing of my personal data in accordance with the
                     Privacy Policy
                </span>
                <button onClick={handleClick} className='register-button'>Create Account</button>
            </div>
        </div>
    )
}

export default Register