import React, { useState } from 'react';
import './HomeScreen.css'; 

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="home-container">
      <div className="navigation-container">
        <h2>
          <img src="./src/assets/logo.png" alt="LtVision Logo" className="logo-icon" />
          LtVision
        </h2>
        <div
          className={`nav-option ${selectedOption === 'Dashboard' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Dashboard')}
        >
          <img src="./src/assets/dashboard-icon.png" alt="Dashboard" className="nav-icon" />
          Dashboard
        </div>
        <div
          className={`nav-option ${selectedOption === 'My Profile' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('My Profile')}
        >
          <img src="./src/assets/profile-icon.png" alt="My Profile" className="nav-icon" />
          My Profile
        </div>
        <div
          className={`nav-option ${selectedOption === 'Appointments' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Appointments')}
        >
          <img src='./src/assets/appointments-icon.png' alt="Appointments" className="nav-icon" />
          Appointments
        </div>
        <div
          className={`nav-option ${selectedOption === 'Patients' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Patients')}
        >
          <img src='./src/assets/patients-icon.png' alt="Patients" className="nav-icon" />
          Patients
        </div>
        <div
          className={`nav-option ${selectedOption === 'Chats' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Chats')}
        >
          <img src='./src/assets/chats-icon.png' alt="Chats" className="nav-icon" />
          Chats
        </div>
        <div
          className={`nav-option ${selectedOption === 'Alerts' ? 'selected' : ''}`}
          onClick={() => handleOptionClick('Alerts')}
        >
          <img src='./src/assets/alerts-icon.png' alt="Alerts" className="nav-icon" />
          Alerts
        </div>
      </div>
      <div className="main-content">
        {/* Your main content goes here */}
      </div>
    </div>
  );
};

export default HomeScreen;
