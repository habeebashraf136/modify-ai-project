import React from 'react';
import { useNavigate } from 'react-router';
import './firstpages.scss';

const FirstPages = () => {
  const navigate = useNavigate();

  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1>Music Mood AI</h1>
        <p>Your mood, your music. AI-powered emotion detection to find your perfect track.</p>
        
        <div className="button-group">
          <button 
            className="btn btn-primary" 
            onClick={() => navigate('/login')}
          >
            Login
          </button>
          <button 
            className="btn btn-secondary" 
            onClick={() => navigate('/register')}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};

export default FirstPages;
