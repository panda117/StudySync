import React from 'react';
import { motion } from 'framer-motion';
import { FaSignOutAlt } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css'; // We'll create this CSS file next

const Sidebar = ({ userName, features }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login'); // Use navigate for internal routing
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="/logo.png" alt="StudySync Logo" className="logo-img" />
        {/* <h2>StudySync</h2> */}
      </div>
      <div className="user-profile">
        <div className="avatar">{userName?.charAt(0).toUpperCase() || 'U'}</div>
        <span>{userName || 'User'}</span>
      </div>
      <nav className="nav-menu">
        {features.map((feature) => (
          <motion.button
            key={feature.title}
            className={`nav-item ${location.pathname === feature.path ? 'active' : ''}`}
            onClick={() => handleNavigate(feature.path)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {feature.icon}
            <span>{feature.title}</span>
          </motion.button>
        ))}
      </nav>
      <button className="logout-btn" onClick={handleLogout}>
        <FaSignOutAlt />
        <span>Logout</span>
      </button>
    </aside>
  );
};

export default Sidebar; 