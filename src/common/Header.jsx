import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useTheme } from './ThemeContext.jsx';
import { AuthContext } from '../components/AuthContext.jsx';

function Header() {
    const { toggleTheme } = useTheme();
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate('/login');
    }

    return (
        <div className="header">
            <h1>My Blog</h1>

            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/posts">Blog Posts</Link></li>
                </ul>
            </nav>

            {user ? (
                <button onClick={handleLogout}>Logout</button>
            ) : (
                <Link to="/login" className="login-button">Login</Link>
            )}

            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    );
}

export default Header;