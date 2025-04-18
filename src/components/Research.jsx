import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaBook,
  FaChartBar,
  FaCalendarAlt,
  FaSearch,
  FaFileAlt,
  FaClock,
} from 'react-icons/fa';
import Sidebar from './Sidebar'; 
import './PageLayout.css'; 
import './Research.css'; // We'll create this CSS file next

const Research = () => { 
  const [userName, setUserName] = useState('');
  const [researchTopic, setResearchTopic] = useState('');
  const [researchResult, setResearchResult] = useState('');

  // Load user data on mount
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setUserName(JSON.parse(user).name || 'User');
    }
  }, []);

  // Define features for the sidebar navigation
  const features = [
    { title: 'DashBoard', icon: <FaChartBar />, path: '/home' }, 
    { title: 'Study Planner', icon: <FaCalendarAlt />, path: '/planner' }, 
    { title: 'Analytics', icon: <FaChartBar />, path: '/analytics' },
    { title: 'Books Marketplace', icon: <FaBook />, path: '/marketplace' },
    { title: 'Research', icon: <FaSearch />, path: '/research' }, 
    { title: 'Summarize', icon: <FaFileAlt />, path: '/summarize' }, 
    { title: 'Focus Time', icon: <FaClock />, path: '/focus' },
  ];

  const handleResearch = () => {
    // Placeholder for actual research logic
    // In a real app, you'd call an API with the researchTopic
    setResearchResult(`Detailed research findings for: "${researchTopic}"...`); 
  };

  return (
    <div className="page-container"> 
      <Sidebar userName={userName} features={features} /> 
      
      <main className="main-content">
        <header className="research-header">
          <h1>Research</h1>
          <p className="research-subtitle">Perform deep and specific research on any topic.</p>
        </header>
        <div className="research-container"> {/* Changed class name */}
          <motion.div 
            className="text-area-container input-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <textarea
              placeholder="Enter Research Topic or Question here"
              value={researchTopic}
              onChange={(e) => setResearchTopic(e.target.value)}
              className="text-area input-area"
            />
             <motion.button 
                onClick={handleResearch}
                className="research-button" // Changed class name
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
             >
               Start Research
             </motion.button>
          </motion.div>
          <motion.div 
            className="text-area-container output-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="output-title">Research Results</h2>
            <textarea
              placeholder="Research findings will appear here..."
              value={researchResult}
              readOnly
              className="text-area output-area research-output" // Added specific class
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Research; 