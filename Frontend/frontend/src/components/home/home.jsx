import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css';

const Home = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        // Redirect to /todo
        navigate('/todo');
    };

    return (
        <div className="home d-flex justify-content-center align-items-center">
            <div className='container d-flex justify-content-center align-items-center flex-column'>
                <section>
                    <h1 className='h1'>Organize your <br />work, life, and family</h1>
                    <p>Become Focused, Organized, and calm with <br />todo app. The world's #1 task manager app</p>
                    <button className='home-btn pd-2' onClick={handleClick}>Make Todo list</button>
                </section>
            </div>
        </div>
    );
};

export default Home;
