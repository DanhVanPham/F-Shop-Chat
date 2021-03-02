import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, useLocation } from 'react-router-dom';
import '../Login/style.css';
import AutheService from '../../services/AuthenticationService';


function Login(props) {
    const history = useHistory();
    const [account, setAccount] = useState({
        username: "",
        password: "",
    });
    const [userInfo, setUserInfo] = useState({
        userId: "",
        userName: "",
        avatar: "",
    });

    const login = async (e) => {
        e.preventDefault();
        console.log(account);
        const credentails = JSON.stringify(account);
        try {
            const response = await AutheService.login(credentails);
            if (response.status === 200) {
                const res = await AutheService.getUser(account.username);
                if (res.status === 200) {
                    const { userId, userName, avatar } = res.data;
                    setUserInfo({ userId, userName, avatar });
                    props.function({ userInfo });
                }
            }
        } catch (err) {
            throw new Error(err);
        }
    }

    // useEffect(() => {
    //     localStorage.setItem("user-info", JSON.stringify(userInfo));
    // }, [userInfo])

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAccount({
            ...account,
            [name]: value
        })
    }

    return (
        <div className="form-content-right">
            <form className="form">
                <div className="form-inputs">
                    <input type="text" name="username" onChange={handleChange} className="form-input" placeholder="Email hoặc Username" />
                </div>
                <div className="form-inputs">
                    <input type="password" name="password" onChange={handleChange} className="form-input" placeholder="Mật khẩu" />
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