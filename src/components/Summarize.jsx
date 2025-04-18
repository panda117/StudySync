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
import Sidebar from './Sidebar'; // Import the Sidebar component
import './PageLayout.css'; // Shared page layout styles
import './Summarize.css'; // Specific styles for Summarize content

const Summarize = () => { 
  const [userName, setUserName] = useState('');
  const [inputText, setInputText] = useState('');
  const [summarizedText, setSummarizedText] = useState('');

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

  const handleSummarize = () => {
    // Placeholder for actual summarization logic
    // In a real app, you'd call an API here
    setSummarizedText(`Summary of: "${inputText.substring(0, 50)}..."`); 
  };

  return (
    <div className="page-container"> 
      <Sidebar userName={userName} features={features} /> 
      
      <main className="main-content">
        <header className="summarize-header">
          <h1>Summarize</h1>
        </header>
        <div className="summarize-container">
          <motion.div 
            className="text-area-container input-container"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <textarea
              placeholder="Enter Text here"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              className="text-area input-area"
            />
             <motion.button 
                onClick={handleSummarize}
                className="summarize-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
             >
               Summarize Text
             </motion.button>
          </motion.div>
          <motion.div 
            className="text-area-container output-container"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h2 className="output-title">Summarized Text</h2>
            <textarea
              placeholder="Summary will appear here..."
              value={summarizedText}
              readOnly
              className="text-area output-area"
            />
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Summarize; // Ensure the default export is present 