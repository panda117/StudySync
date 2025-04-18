import React from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  return (
    <div className="auth-container">
      <div className="auth-header">
        <div className="logo">StudySync</div>
        <Link to="/login" className="auth-switch-btn">LOG IN</Link>
      </div>

      <div className="auth-form-container">
        <h1>STUDYSYNC - YOUR<br />STUDY BUDDY</h1>
        
        <div className="auth-form">
          <h2>SIGN UP</h2>
          <form>
            <div className="form-group">
              <label>Mail ID</label>
              <input type="email" required />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input type="password" required />
            </div>
            <button type="submit" className="auth-submit-btn">SIGN UP</button>
          </form>
          <div className="google-auth">
            <span>Continue with Google</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 