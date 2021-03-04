import React, { Fragment, useState } from 'react';
import './style.css';
import AutheService from '../../services/AuthenticationService';
import { Redirect } from 'react-router';
import Loading from '../../assets/loading.svg';

function FormLogin(props) {
    const [account, setAccount] = useState({
        username: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState("");

    const login = async (e) => {
        e.preventDefault();
        const credentails = JSON.stringify(account);
        try {
            setLoading(true);
            const response = await AutheService.login(credentails);
            if (response.status === 200) {
                const res = await AutheService.getUser(account.username);
                if (res.status === 200) {
                    const { userId, userName, avatar, roleId } = res.data;
                    localStorage.setItem("account", JSON.stringify({ userId, userName, avatar, roleId }))
                    setRedirect(true);
                }
            }
        } catch (err) {
            if(err.response === undefined){
                setError("Cannot connect to server");
            } else if (err.response.status === 401 || err.response.status === 400) {
                setError("Username or password is wrong");
            }
        } finally {
            setLoading(false);
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

    return <Fragment>
        {redirect ? <Redirect to="/chat/a" /> : <div className="form-content-right">
            <form className="form">
                <div className="form-inputs">
                    <input type="text" name="username" onChange={handleChange} className="form-input" placeholder="Email hoặc Username" />
                </div>
                <div className="form-inputs">
                    <input type="password" name="password" onChange={handleChange} className="form-input" placeholder="Mật khẩu" />
                </div>
                <div className="form-submit">
                    <button type="submit" className="form-input-btn" onClick={login}>
                        {loading ? <img src={Loading} alt="Loading" width="30px" height="30px" /> : "Đăng nhập"}
                    </button>
                    <div className="error-message">{error}</div>
                </div>
                <div className="border-line"></div>
                <div className="link-create-account">
                    <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Tạo tài khoản mới</a>
                </div>
            </form>
        </div>}
    </Fragment>
}

export default FormLogin;