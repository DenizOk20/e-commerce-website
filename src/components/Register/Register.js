import './Register.css'

const Register = () => {
    return(
        <div className='register-container'>
            <div className='register-section'>
                <h1 className='register-title'>Create An Account</h1>
                <form className='info-form'>
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Last Name"/>
                    <input type="text" placeholder="User Name"/>
                    <input type="email" placeholder="e-mail"/>
                    <input type="password" placeholder="Password"/>
                    <input type="password" placeholder="Confirm Password"/>
                </form>
                <span className='register-desc'>By creating an acoount, I consent to the processing of my personal data in accordance with the
                     Privacy Policy
                </span>
                <button className='register-button'>Create Account</button>
            </div>
        </div>
    )
}

export default Register