import React, { useEffect, useState } from 'react';
import "./navbar.css";
import { IoBookmarksOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
    const [username, setUsername] = useState("");
    const [isSignedIn, setIsSignedIn] = useState(false);

    const updateAuthFromLocalStorage = () => {
        const storedUsername = localStorage.getItem("username");
        const signedInStatus = localStorage.getItem("isSignedIn") === "true";

        setUsername(storedUsername || "");
        setIsSignedIn(signedInStatus);
    };

    useEffect(() => {
        updateAuthFromLocalStorage();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("username");
        localStorage.removeItem("email");
        localStorage.setItem("isSignedIn", "false");
        setUsername("");
        setIsSignedIn(false);
        window.location.href = "/";
    };

    return (
        <div className='nvbr'>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <b><IoBookmarksOutline /> &nbsp;TODO</b>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item mx-2">
                                <Link className="nav-link active" aria-current="page" to="/todo">To-do</Link>
                            </li>
                            {isSignedIn ? (
                                <>
                                    <li className="nav-item mx-2">
                                        <span className="nav-link active welcome-text">Welcome, {username}!</span>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link active btn-nav" onClick={handleLogout} to="#">Log out</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link active btn-nav" aria-current="page" to="/signup">Sign Up</Link>
                                    </li>
                                    <li className="nav-item mx-2">
                                        <Link className="nav-link active btn-nav" aria-current="page" to="/signin">Sign In</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
