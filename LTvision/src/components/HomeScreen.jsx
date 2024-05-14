import React, { useState } from "react";
import Navbar from "./Navbar";
import UploadCtScan from "./UploadCtScan";
import "./Navbar.css";
import "./UploadCtScan"
import "./HomeScreen.css";

const HomeScreen = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const [selectedDay, setSelectedDay] = useState(null);

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };
  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };
  const getCurrentMonthYear = () => {
    const now = new Date();
    const month = now.toLocaleString("default", { month: "long" });
    const year = now.getFullYear();
    return `${month} ${year}`;
  };

  return (
    <div className="home-container">
      <div className="navigation-container">
        <h2>
          <img
            src="./src/assets/logo.png"
            alt="LtVision Logo"
            className="logo-icon"
          />
          LtVision
        </h2>
        <div
          className={`nav-option ${
            selectedOption === "Dashboard" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Dashboard")}
        >
          <img
            src="./src/assets/dashboard-icon.png"
            alt="Dashboard"
            className="nav-icon-dash"
          />
          Dashboard
        </div>
        <div
          className={`nav-option ${
            selectedOption === "My Profile" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("My Profile")}
        >
          <img
            src="./src/assets/profile-icon.png"
            alt="My Profile"
            className="nav-icon"
          />
          My Profile
        </div>
        <div
          className={`nav-option ${
            selectedOption === "Appointments" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Appointments")}
        >
          <img
            src="./src/assets/appointments-icon.png"
            alt="Appointments"
            className="nav-icon"
          />
          Appointments
        </div>
        <div
          className={`nav-option ${
            selectedOption === "Patients" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Patients")}
        >
          <img
            src="./src/assets/patients-icon.png"
            alt="Patients"
            className="nav-icon"
          />
          Patients
        </div>
        <div
          className={`nav-option ${
            selectedOption === "Chats" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Chats")}
        >
          <img
            src="./src/assets/chats-icon.png"
            alt="Chats"
            className="nav-icon"
          />
          Chats
        </div>
        <div
          className={`nav-option ${
            selectedOption === "Alerts" ? "selected" : ""
          }`}
          onClick={() => handleOptionClick("Alerts")}
        >
          <img
            src="./src/assets/alerts-icon.png"
            alt="Alerts"
            className="nav-icon"
          />
          Alerts
        </div>
      </div>
      <div className="main-content">
        <div className="inner-container">
          <div className="info">
            <div className="up">
              <h2>Upcoming Appointment</h2>
            </div>
            <div className="calendar">
              <img
                src="./src/assets/calender.png"
                alt=""
                className="calendar-icon"
              />
              <span className="current-month-year">
                {getCurrentMonthYear()}
              </span>
            </div>
          </div>

          <div
            className={`day-container ${
              selectedDay === "Monday" ? "selected" : ""
            }`}
            onClick={() => handleDayClick("Monday")}
          >
            Mon
            <br />1
          </div>
          <div
            className={`day-container ${
              selectedDay === "Tuesday" ? "selected" : ""
            }`}
            onClick={() => handleDayClick("Tuesday")}
          >
            Tues
            <br />2
          </div>
          <div
            className={`day-container ${
              selectedDay === "Wednesday" ? "selected" : ""
            }`}
            onClick={() => handleDayClick("Wednesday")}
          >
            Wed
            <br />3
          </div>
          <div
            className={`day-container ${
              selectedDay === "Thursday" ? "selected" : ""
            }`}
            onClick={() => handleDayClick("Thursday")}
          >
            Thur
            <br />4
          </div>
          <div
            className={`day-container ${
              selectedDay === "Friday" ? "selected" : ""
            }`}
            onClick={() => handleDayClick("Friday")}
          >
            Fri
            <br />5
          </div>
          <div
            className={`day-container ${
              selectedDay === "Saturday" ? "selected" : ""
            }`}
            onClick={() => handleDayClick("Saturday")}
          >
            Sat
            <br />6
          </div>
          <div className="app-details">
            <div className="day-time-container">
              <div>9:00 AM</div>
              <div>10:00 AM</div>
              <div>11:00 AM</div>
              <div>12:00 PM</div>
              <div>1:00 PM</div>
              <div>2:00 PM</div>
              <div>3:00 PM</div>
              <div>4:00 PM</div>
            </div>
            <div className="cards">
            <div className="card">
            <div className="inner-div">
    <div className="picture">
        <img className="per" src="./src/assets/per.png" alt="Person Image" />
    </div>
    <div className="details">
        <div className="time-container">
            <img className="icon" src="./src/assets/time.png" alt="Time Icon" />
            <span className="bold-text">10:00 AM</span>
        </div>
        <p className="bold-text2">John Doe</p>
        <p className="bold-text">Liver Swelling</p>
    </div>
</div>

              <div className="buttons">
                <button className="chat-button">
                  <img
                    src="./src/assets/chat.png"
                    alt="Chat"
                    className="button-icon"
                  />{" "}
                  Chat
                </button>
                <button className="cancel-button">
                  <img
                    src="./src/assets/cancel.png"
                    alt="Cancel"
                    className="button-icon"
                  />{" "}
                  Cancel
                </button>
              </div>
            </div>


            <div className="card">
            <div className="inner-div">
    <div className="picture">
        <img className="per" src="./src/assets/per.png" alt="Person Image" />
    </div>
    <div className="details">
        <div className="time-container">
            <img className="icon" src="./src/assets/time.png" alt="Time Icon" />
            <span className="bold-text">10:00 AM</span>
        </div>
        <p className="bold-text2">John Doe</p>
        <p className="bold-text">Liver Swelling</p>
    </div>
</div>

              <div className="buttons">
                <button className="chat-button">
                  <img
                    src="./src/assets/chat.png"
                    alt="Chat"
                    className="button-icon"
                  />{" "}
                  Chat
                </button>
                <button className="cancel-button">
                  <img
                    src="./src/assets/cancel.png"
                    alt="Cancel"
                    className="button-icon"
                  />{" "}
                  Cancel
                </button>
              </div>
            </div>



            <div className="card">
            <div className="inner-div">
    <div className="picture">
        <img className="per" src="./src/assets/per.png" alt="Person Image" />
    </div>
    <div className="details">
        <div className="time-container">
            <img className="icon" src="./src/assets/time.png" alt="Time Icon" />
            <span className="bold-text">10:00 AM</span>
        </div>
        <p className="bold-text2">John Doe</p>
        <p className="bold-text">Liver Swelling</p>
    </div>
</div>

              <div className="buttons">
                <button className="chat-button">
                  <img
                    src="./src/assets/chat.png"
                    alt="Chat"
                    className="button-icon"
                  />{" "}
                  Chat
                </button>
                <button className="cancel-button">
                  <img
                    src="./src/assets/cancel.png"
                    alt="Cancel"
                    className="button-icon"
                  />{" "}
                  Cancel
                </button>
              </div>
            </div>
            </div>
          </div>
        </div>
        <div className="additional-container">
        <UploadCtScan />
        </div>
      </div>
      <Navbar />
    </div>
  );
};

export default HomeScreen;
