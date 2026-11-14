import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import {useEffect, useState} from "react";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                return response.json();
            })
        .then(data => setPosts(data.slice(0, 6)))
        .catch(error => console.error('Error fetching posts:', error))
        .finally(() => setLoading(false));
    }, []);

	return (
        <div>
            <Header />
        
            <div className="post-list">
                {loading ? (
                <p className="loading">Loading posts...</p>
            ) : (
                posts.map(post => (
                    <article className="post-card" key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body.substring(0, 100)}...</p>
                        <Link to={`/posts/${post.id}`}>Read More</Link>
                    </article>
                ))
                )}
            </div>
             <Footer />
        </div>
	);
}

export default PostList;
