import React from 'react'

function FormLogin() {
    return (
        <div className="form-content-right">
            <form action="" className="form">
                <h1>Login Page</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                        Username:
                    </label>
                    <input type="text" name="username" className="form-input" placeholder="Enter your username:" />
                </div>
                <div className="form-inputs">
                    <label htmlFor="password" className="form-label">
                        Password:
                        </label>
                    <input type="password" name="password" className="form-input" placeholder="Enter your username:" />
                </div>
            </form>
        </div>
    )
}

export default FormLogin
