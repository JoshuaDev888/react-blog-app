import React from 'react';
import { Link } from 'react-router-dom';
import {useTheme} from "./ThemeContext.jsx";

function Header() {
	const {toggleTheme} = useTheme();
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

		<button onClick={toggleTheme}>Toggle Theme</button>

	</div>
  );
}

export default Header;