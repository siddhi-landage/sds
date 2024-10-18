import React from 'react';
import './Login.css';

const LoginPage = () => {
  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <form>
          <div className="form-group">
            <label>Email</label>
            <input type="email" className="form-control" placeholder="Enter email" />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" placeholder="Enter password" />
          </div>

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">
              By continuing, I agree to the terms of use & condition
            </label>
          </div>

          <button type="submit" className="btn-login">Login</button>

          <p className="text-center">
            Create a new Account? <a href="/signup">Click here</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
