import React from 'react'
import useForm from '../useForm'
import validate from '../validateInfo'
import '../Form.css'
const FormLogin = ({ submitForm }) => {
    const { handleChange, values, handleSubmit, errors } = useForm(submitForm, validate);

    return (
        <div className="form-content-right">
            <form className="form" onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input type="text" name="username" className="form-input" placeholder="Enter your username:"
                        value={values.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p>{errors.username}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password:
                        </label>
                    <input type="password" name="password" className="form-input" placeholder="Enter your password:"
                        value={values.password}
                        onChange={handleChange} />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                {errors.status && <p>{errors.status}</p>}
                <button type="submit" className="form-input-btn"
                >
                    Login
                </button>
            </form>
        </div>
    )
}

export default FormLogin
