import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import About from "./components/about/About";
import Signin from "./components/signup/Signin";
import Signup from "./components/signup/Signup";
import Footer from "./components/footer/footer";
import Todo from "./components/todo/Todo";//-

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;

