import React from 'react'
import "./Change.scss";

const Change = () => {
  return (
    <div className='change'>
      <div className="change-container">
        <h1 className='change-container-text'>Login</h1>
          <form className='change-container-form'>
            <input type="text" placeholder='Nazwa Użytkownika' className='change-container-form-mail' />
            <input type="email" placeholder='E-mail' className='change-container-form-password'/>
        </form>
        <button className='change-container-button'>
          <h1 className='change-container-button-text'>
            Przypomnij Hasło
          </h1>
        </button>
      </div>
      </div>
  )
}

export default Change