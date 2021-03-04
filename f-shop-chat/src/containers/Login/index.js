import React from 'react';
import FormLogin from '../../components/LoginForm/index'
import '../Login/style.css';
import Banner from '../../assets/banner.svg'
function Login(props) {
    return (
        <div className="form-container">
            <div className="form-content-left">
                <img src={Banner} alt="spaceship" className="form-img" />
            </div>
            <FormLogin />
        </div>
    );
}

export default Login;