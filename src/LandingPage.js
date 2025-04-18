import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  const tools = [
    { name: 'Study Planner', icon: '📅' },
    { name: 'Analytics', icon: '📊' },
    { name: 'Books Marketplace', icon: '📚' },
    { name: 'Research', icon: '🔍' },
    { name: 'Summarize', icon: '📝' },
    { name: 'Focus Time', icon: '⏱️' },
  ];

  return (
    <div className="landing-container">
      {/* Header */}
      <header>
        <div className="logo">StudySync</div>
        <button className="join-btn" onClick={() => navigate('/signup')}>Join Now</button>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <h1>STUDYSYNC – YOUR STUDY BUDDY</h1>
        <div className="gradient-box" />
        <p>
          One Solution for <span>ALL</span> your Problems
        </p>

        {/* Tools Grid */}
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-box">
              <span className="tool-icon">{tool.icon}</span>
              <span className="tool-name">{tool.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="why-choose">
        <h2>Why Choose <span className="text-cyan">StudySync</span>?</h2>
        
        <div className="features-container">
          <div className="feature-card">
            <span className="feature-number">01.</span>
            <h3>AI Study Planner</h3>
            <p>Never miss a deadline with smart reminders.</p>
          </div>

          <div className="feature-card active">
            <span className="feature-number">02.</span>
            <h3>AI Study Planner</h3>
            <p>The AI Study Planner creates smart study schedules, sends reminders, and adapts to missed sessions. It also includes a focus timer to boost productivity and keep you on track effortlessly.</p>
          </div>

          <div className="feature-card">
            <span className="feature-number">03.</span>
            <h3>Flashcards & Research</h3>
            <p>Boost memory with interactive flashcards and research assistance.</p>
          </div>
        </div>
      </section>

      {/* Bottom Section */}
      <section className="bottom-section">
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon laptop-icon">💻</div>
            <h3 className="feature-title">100% FREE</h3>
            <p className="feature-desc">Get started with basic<br />AI tools with no cost</p>
          </div>

          <div className="feature-item">
            <div className="icon brain-icon">🧠</div>
            <h3 className="feature-title">AI-Powered<br />Features</h3>
          </div>

          <div className="feature-item">
            <div className="icon student-icon">👨‍🎓</div>
            <h3 className="feature-title">Designed for Students,<br />by Students</h3>
          </div>
        </div>

        <div className="join-text">
          Join <span className="text-cyan">Thousands</span> of Students<br />
          Excelling with <span className="text-cyan">StudySync!</span>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 StudySync. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
