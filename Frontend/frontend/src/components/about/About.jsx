import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about d-flex justify-content-center align-items-center">
      <div className="container text-center">
        {/* Heading */}
        <h1 className="about-title fade-down">About Us</h1>

        {/* Intro Paragraph */}
        <p className="about-text fade-in">
          Welcome to <span className="brand">TaskMaster</span> – your ultimate
          tool for staying organized and productive! Our mission is to help
          individuals and teams efficiently manage their tasks, set priorities,
          and accomplish more every day.
        </p>

        <p className="about-text fade-in delay-1">
          At TaskMaster, we believe that productivity shouldn't be complicated.
          That’s why we’ve built an intuitive and user-friendly app designed to
          streamline your workflow. Whether you're a busy professional juggling
          multiple projects, a student managing assignments, or someone who
          simply wants to stay on top of personal tasks, TaskMaster is here to
          simplify the way you organize your life.
        </p>

        {/* Features Section */}
        <div className="features-grid fade-up">
          <div className="feature-card">✅ Simple Task Management</div>
          <div className="feature-card">⭐ Prioritization & Deadlines</div>
          <div className="feature-card">🤝 Seamless Collaboration</div>
          <div className="feature-card">🌐 Cross-Platform Access</div>
          <div className="feature-card">📝 Customizable Lists</div>
        </div>

        {/* Closing */}
        <p className="about-text fade-in delay-2">
          At the heart of <span className="brand">TaskMaster</span> is our
          commitment to helping you achieve more in less time. We continuously
          update our app with new features based on user feedback to ensure it
          remains the go-to solution for task management.
        </p>

        <p className="about-thanks fade-up">
          🙏 Thank you for choosing <span className="brand">TaskMaster</span> – 
          let's get things done, one task at a time!
        </p>
      </div>
    </div>
  );
};

export default About;
