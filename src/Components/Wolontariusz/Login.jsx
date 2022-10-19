import React from 'react'
import { Link } from "react-router-dom";
import "./Login.scss";



const Login = () => {
  return (
    <div className='login'>
      <div className="login-container">
        <h1 className='login-container-text'>Login</h1>
          <form className='login-container-form'>
            <input type="text" placeholder='Nazwa Użytkownika' className='login-container-form-mail' />
            <input type="password" placeholder='Hasło' className='login-container-form-password'/>
        </form>
        <button className='login-container-button'>
          <h1 className='login-container-button-text'>
            Zaloguj się
          </h1>
        </button>
        <Link to="/Rejestracja">
        <button className='login-container-button'>
          <h1 className='login-container-button-text'>
            Zarejestruj się
          </h1>
          </button>
        </Link>
        <Link to="/Changepassword">
          <a>
          Zapomniałeś hasła?
        </a>
        </Link>
        
        </div>
    </div>
  )
}

export default Login