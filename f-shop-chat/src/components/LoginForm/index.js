import React, { Fragment, useState } from 'react';
import './style.css';
import AutheService from '../../services/AuthenticationService';
import { Redirect } from 'react-router';
import Loading from '../../assets/loading.svg';
import InputField from '../InputField';

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
            if (err.response === undefined) {
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
        {redirect ? <Redirect to="/chat/a" /> :
            <form className="form">
                <h1 className="title">Login</h1>
                <InputField
                    name="Username"
                    type="text"
                    label="Your name"
                    icon={<i class="fa fa-user" aria-hidden="true"></i>}
                />
                <InputField
                    type="password"
                    name="fullname"
                    label="Password"
                    icon={<i class="fa fa-key" aria-hidden="true"></i>}
                />
                <div style={{ 'marginTop': '40px' }} />
                <button type="submit" className="button-login" onClick={login}>
                    {loading ? <img src={Loading} alt="Loading" width="30px" height="30px" /> : "LOGIN"}
                </button>
                <div style={{ 'marginTop': '25px' }} />
                <p className="link-create">Don't have account? <a href="google.com">Register Here</a></p>
                {/* <button type="submit" className="button-login" onClick={login}>
                    REGISTER
                </button> */}
                {/* <div className="form-submit">
                    <button type="submit" className="form-input-btn" onClick={login}>
                        {loading ? <img src={Loading} alt="Loading" width="30px" height="30px" /> : "Đăng nhập"}
                    </button>
                    <div className="error-message">{error}</div>
                </div>
                <div className="border-line"></div>
                <div className="link-create-account">
                    <a href="https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-is-valid.md">Tạo tài khoản mới</a>
                </div> */}
            </form>}
    </Fragment>
}

export default FormLogin;