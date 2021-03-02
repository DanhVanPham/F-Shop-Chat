import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../Login/style.css';
import AutheService from '../../services/AuthenticationService';

function Login() {
    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userInfo, setUserInfo] = useState();

    const login = async (e) => {
        e.preventDefault();
        const credentails = JSON.stringify({ username, password });
        const response = await AutheService.login(credentails);
        if (response.status === 200) {
            console.log(response);
            document.cookie = "a=b";
            // const res = await AutheService.getUser(username);
            // if (res.status === 200) {
            //     document.cookie = "a=b";
            // }
        }

    }
    return (
        <div className="form-content-right">
            <form className="form">
                <div className="form-inputs">
                    <input type="text" name="username" onChange={(e) => setUsername(e.target.value)} className="form-input" placeholder="Email hoặc Username" />
                </div>
                <div className="form-inputs">
                    <input type="password" name="password" onChange={(e) => setPassword(e.target.value)} className="form-input" placeholder="Mật khẩu" />
                </div>
                <div className="form-submit">
                    <button type="submit" className="form-input-btn" onClick={login}>
                        Đăng nhập
                    </button>
                </div>
                <div className="border-line"></div>
                <div className="link-create-account">
                    <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Tạo tài khoản mới</a>
                </div>
            </form>
        </div>
    );
}

export default Login;