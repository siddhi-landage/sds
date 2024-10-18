import React, { useState } from 'react';
import './Login.css';
import Sidebar from '../Sidebar/Sidebar.jsx';

const Login = ({ onLogin }) => {
  const [showsidebar, setshowsidebar] = useState(false);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [newu, setnewu] = useState(false); // to toggle between login and signup

  const handlesubmit = (e) => {
    e.preventDefault();
    setshowsidebar(true);
    onLogin(); // Call the parent function to hide the login modal
  };

  const handleSidebarClose = () => {
    setshowsidebar(false);
  };

  return (
    <div className="login-page">
      <div className="login-modal"> {/* Updated class name */}
        {!newu ? <h2>Login</h2> : <h2>Sign up</h2>}
        
        <form onSubmit={handlesubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              className="form-controlone"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          {newu && (
            <div className="form-group">
              <label>Confirm Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Confirm password"
              />
            </div>
          )}

          <div className="form-check">
            <input type="checkbox" className="form-check-input" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">
              By continuing, I agree to the terms of use & conditions
            </label>
          </div>

          <button type="submit" className="btn-login">
            {newu ? 'Sign Up' : 'Login'}
          </button>

          {!newu ? (
            <p className="text-center">
              Don't have an account?{' '}
              <span
                onClick={() => setnewu(true)}
                style={{ cursor: 'pointer', color: 'blue' }}
              >
                Click here to Sign up
              </span>
            </p>
          ) : null}
        </form>

        {showsidebar && <Sidebar onClose={handleSidebarClose} />}
      </div>
    </div>
  );
};

export default Login;
