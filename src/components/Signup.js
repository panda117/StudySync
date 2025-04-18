import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Auth.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // For demo purposes, we'll just check if the fields are not empty
    if (formData.email && formData.password) {
      // Store user data in localStorage
      localStorage.setItem('user', JSON.stringify({
        name: formData.email.split('@')[0], // Using email username as display name
        email: formData.email
      }));
      
      // Navigate to home page
      navigate('/home');
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-header">
        <img src="/logo.png" alt="StudySync Logo" className="logo-img-auth" />
        <Link to="/login" className="auth-switch-btn">LOG IN</Link>
      </div>

      <div className="auth-form-container">
        <h1>STUDYSYNC - YOUR<br />STUDY BUDDY</h1>
        
        <div className="auth-form">
          <h2>SIGN UP</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Mail ID</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
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