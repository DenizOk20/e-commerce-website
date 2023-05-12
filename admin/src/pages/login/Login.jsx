import React from 'react'
import { useState } from 'react'
import {useDispatch} from 'react-redux'
import { login } from '../../redux/apiCalls'
import './Login.css'

const Login = () => {
  const [username,setUsername] = useState('');
  const [password,setPassword] = useState('');
  const dispatch = useDispatch()


  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, {username,password})
  }

  return (
    <div className='admin-login'>
        <input  type='text' placeholder='username' onChange={e => setUsername(e.target.value)}/>
        <input type='password' placeholder='password' onChange={e => setPassword(e.target.value)}/>
        <button onClick={handleClick}>Log in</button>
    </div>
  )
}

export default Login