import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
    return(
        <div className='login-container'>
            <div className='login-section'>
                <h1 className='login-title'>Log In</h1>
                <form className='info-form'>
                    <input type="text" placeholder="User Name"/>
                    <input type="password" placeholder="Password"/>
                </form>
                <Link className='login-desc'>Do not you remember the password?</Link>
                <Link className='login-desc' to="/register">Create a new account</Link>
                <button className='login-button'>Log in</button>
            </div>
        </div>
    )
}

export default Login