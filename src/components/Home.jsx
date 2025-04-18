import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaBook,
  FaChartBar,
  FaCalendarAlt,
  FaSearch,
  FaFileAlt,
  FaClock,
  FaSignOutAlt
} from 'react-icons/fa';
import './Home.css';

const Home = () => {
  const [userName, setUserName] = useState('');
  const [metrics, setMetrics] = useState({
    studyHours: 0,
    booksRead: 0,
    tasksCompleted: 0,
    focusScore: 0
  });

  // Simulate loading user data
  useEffect(() => {
    // In a real app, this would come from your backend
    const user = localStorage.getItem('user');
    if (user) {
      setUserName(JSON.parse(user).name || 'User');
    }

    // Simulate loading metrics
    setMetrics({
      studyHours: 24,
      booksRead: 5,
      tasksCompleted: 12,
      focusScore: 85
    });
  }, []);

  const features = [
    {
      title: 'Study Planner',
      icon: <FaCalendarAlt />,
      description: 'Plan and organize your study schedule',
      color: '#4CAF50'
    },
    {
      title: 'Analytics',
      icon: <FaChartBar />,
      description: 'Track your progress and performance',
      color: '#2196F3'
    },
    {
      title: 'Books Marketplace',
      icon: <FaBook />,
      description: 'Buy and sell academic materials',
      color: '#9C27B0'
    },
    {
      title: 'Research',
      icon: <FaSearch />,
      description: 'Access research tools and resources',
      color: '#FF9800'
    },
    {
      title: 'Summarize',
      icon: <FaFileAlt />,
      description: 'Generate quick summaries of content',
      color: '#E91E63'
    },
    {
      title: 'Focus Time',
      icon: <FaClock />,
      description: 'Track and improve study focus',
      color: '#00BCD4'
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('user');
    // Add your logout logic here
  };

  return (
    <div className="home-container">
      <aside className="sidebar">
        <div className="logo">
          <img src="/logo.png" alt="StudySync" className="logo-img" />
          <h2>StudySync</h2>
        </div>
        <nav className="nav-menu">
          {features.map((feature) => (
            <motion.button
              key={feature.title}
              className="nav-item"
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

      <main className="main-content">
        <header className="welcome-section">
          <div>
            <h1>Welcome back, {userName}!</h1>
            <p className="tagline">
              One Solution for <span className="highlight">ALL</span> your Problems
            </p>
          </div>
        </header>

        <section className="metrics-section">
          <h2>Your Progress</h2>
          <div className="metrics-grid">
            <motion.div
              className="metric-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h3>Study Hours</h3>
              <p>{metrics.studyHours}h</p>
            </motion.div>
            <motion.div
              className="metric-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <h3>Books Read</h3>
              <p>{metrics.booksRead}</p>
            </motion.div>
            <motion.div
              className="metric-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h3>Tasks Completed</h3>
              <p>{metrics.tasksCompleted}</p>
            </motion.div>
            <motion.div
              className="metric-card"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h3>Focus Score</h3>
              <p>{metrics.focusScore}%</p>
            </motion.div>
          </div>
        </section>

        <section className="features-section">
          <h2>Quick Access</h2>
          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="feature-card"
                style={{ backgroundColor: feature.color }}
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home; 