import { Link, useNavigate } from 'react-router-dom'
import './Login.css'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Logout, login } from '../../redux/apiCalls'
import { loginSuccess } from '../../redux/userRedux'

const Login = () => {

    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const dispatch = useDispatch();
    const {isFetching, error} = useSelector((state) => state.user)
    const navigate = useNavigate()
    const handleClick = (e) => {
        e.preventDefault();
        login(dispatch, {username,password})
        if(loginSuccess()){
            navigate('/')
        }
        else{
            navigate('/register')
        }
    }


    return(
        <div className='login-container'>
            <div className='login-section'>
                <h1 className='login-title'>Log In</h1>
                <form className='info-form'>
                    <input type="text" placeholder="User Name" onChange={(e) => setUsername(e.target.value)}/>
                    <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                </form>
                <Link className='login-desc'>Do not you remember the password?</Link>
                <Link className='login-desc' to="/register">Create a new account</Link>
                <button onClick={handleClick} className='login-button' disabled={isFetching} style={{cursor: isFetching ? "not-allowed" : 'pointer'}} >Log in</button>
                {error && <div style={{color: "red",marginTop:"6px"}}>Something went wrong!</div>}
            </div>
        </div>
    )
}

export default Login