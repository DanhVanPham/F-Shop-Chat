import React, { useState } from 'react'
import FormLogin from './Components/FormLogin'
import './Form.css'
function Form() {
    return (
        <div className="form-container">
            <span className="close-btn">x</span>
            <div className="form-content-left">
                <img src="img/img-2.svg" alt="spaceship" className="form-img" />
            </div>
            <FormLogin />
        </div>
    )
}

export default Form
