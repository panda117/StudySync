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
import './StudyPlanner.css'; // We'll create this CSS file

const StudyPlanner = () => { 
  const [userName, setUserName] = useState('');
  const [taskInput, setTaskInput] = useState('');
  const [plannerContent, setPlannerContent] = useState(''); // Placeholder for planner data/display

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

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    // Placeholder for adding task logic and updating planner
    // In a real app, you'd likely send this to a backend or manage complex state
    console.log("Task Input:", taskInput);
    setPlannerContent(`Planner updated with tasks related to: "${taskInput}"`); // Simple update
    setTaskInput(''); // Clear input after submit
  };

  return (
    <div className="page-container"> 
      <Sidebar userName={userName} features={features} /> 
      
      <main className="main-content">
        <header className="planner-header">
          <h1>STUDY PLANNER</h1>
        </header>

        <motion.form 
          className="task-input-form"
          onSubmit={handleTaskSubmit}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input 
            type="text"
            placeholder="Mention all your Tasks"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            className="task-input-field"
            required
          />
          {/* Optionally add a submit button if needed, or rely on Enter key */}
          {/* <button type="submit" className="task-submit-btn">Add Task</button> */}
        </motion.form>

        <motion.section 
          className="planner-display-section"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2>Your Planner</h2>
          <div className="planner-content-area">
            {/* This area would display the actual planner (e.g., calendar, task list) */}
            {plannerContent || "Your generated plan will appear here..."}
          </div>
        </motion.section>
      </main>
    </div>
  );
};

export default StudyPlanner; 