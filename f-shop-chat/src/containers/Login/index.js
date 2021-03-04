import React from 'react';
import FormLogin from '../../components/Login/index'
import '../Login/style.css';

function Login(props) {
    return (
        <div className="form-container">
            <div className="form-content-left">
                <img src="img/img-2.svg" alt="spaceship" className="form-img" />
            </div>
            <FormLogin {...props} />
        </div>
    );
}

export default Login;