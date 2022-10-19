import React from 'react'
import "./Register.scss";

const Register = () => {
  return (
    <div className='register'>
      <div className="register-container">
        <h1 className='register-container-text'>Login</h1>
              <form className='register-container-form'>
                <input type="text" placeholder='E-mail' className='register-container-form-mail' />
                <input type="text" placeholder='Nazwa Użytkownika' className='register-container-form-user' />
                <input type="password" placeholder='Hasło' className='register-container-form-password' />
                <input type="password" placeholder='Powtórz Hasło' className='register-container-form-password'/>
        </form>
        <button className='register-container-button'>
          <h1 className='register-container-button-text'>
            Zarejestruj się
          </h1>
          </button>
        </div>
    </div>
  )
}

export default Register