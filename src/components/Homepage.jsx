import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';

function Homepage() {
	return (
		<div>
			<Header />
				<div className="homepage">
					<h1>Welcome to My Blog</h1>
					<p>
        Welcome! I'm glad you stopped by. This blog is a place to share
        thoughts, ideas, experiences, and interesting things worth discussing.
    
        The goal of this blog is to create a space where information and
        ideas can be shared in a simple and approachable way. 
		Feel free to browse the posts, explore the different sections of
        the site, and join the conversation.
    </p>

    <p>
        If something catches your attention, don't hesitate to leave a
        comment. I'm always interested in hearing different viewpoints.

        Thanks for visiting, and I hope you enjoy exploring the blog.
        Happy reading!
    </p>
					<p>Please <Link to="/login" className="login-button">log in</Link> to view and leave a comment.</p>
				</div>

			<Footer />
		</div>
	);
}

export default Homepage;
