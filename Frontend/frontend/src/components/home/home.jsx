import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/todo");
  };

  return (
    <div className="home">
      <div className="overlay">
        <section className="container d-flex justify-content-center align-items-center flex-column text-center">
          {/* Title */}
          <h1 className="home-title fade-down">
            Organize your <br />
            <span className="highlight">Work, Life, & Family</span>
          </h1>

          {/* Subtitle */}
          <p className="home-subtitle fade-in">
            Stay <span className="focus">Focused</span>,{" "}
            <span className="focus">Organized</span>, and{" "}
            <span className="focus">Calm</span> with <br />
            <span className="brand">Todo App</span> — The World’s #1 Task Manager
          </p>

          {/* Features */}
          <div className="features fade-up d-flex justify-content-center align-items-center flex-wrap">
            <div className="feature-card">⏰ Smart Reminders</div>
            <div className="feature-card">🔔 Notifications</div>
            <div className="feature-card">⭐ Priority Organization</div>
            <div className="feature-card">📱 Responsive UI</div>
          </div>

          {/* Button */}
          <button className="home-btn bounce" onClick={handleClick}>
            ➕ Make Your Todo List
          </button>
        </section>
      </div>
    </div>
  );
};

export default Home;
