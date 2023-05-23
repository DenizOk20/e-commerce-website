import { useState } from 'react'
import './Register.css'
import { useDispatch, useSelector } from 'react-redux'
import { register } from '../../redux/apiCalls'
import { registerSuccess } from '../../redux/userRedux'
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
        const user = {...inputs};
        register(dispatch,user);
        if(registerSuccess){
            navigate('/login')
        }
};

    return(
        <div className='register-container'>
            <div className='register-section'>
                <h1 className='register-title'>Create An Account</h1>
                <form className='info-form'>
                    <input name='name' type="text" placeholder="Name" onChange={handleChange} />
                    <input name='lastName' type="text" placeholder="Last Name" onChange={handleChange}/>
                    <input name='username' type="text" placeholder="User Name" onChange={handleChange}/>
                    <input name='email' type="email" placeholder="e-mail" onChange={handleChange}/>
                    <input name='password' type="password" placeholder="Password" onChange={handleChange}/>
                    <input name='confirmPassword' type="password" placeholder="Confirm Password" onChange={handleChange}/>
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