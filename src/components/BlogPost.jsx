import React, {useEffect, useState} from 'react';
import CommentForm from './CommentForm';
import {useParams} from "react-router-dom";
import Header from "../common/Header.jsx";
import Footer from "../common/Footer.jsx";
import Comments from "./Comments.jsx";
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './AuthContext.jsx';

function BlogPost() {
    const {id: postId} = useParams();

    const [post, setPost] = useState(null);
    const [user, setUser] = useState(null);
    const [postComments, setPostComments] = useState([]);
    const { user: loggedInUser } = useContext(AuthContext);


    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then(data => setPost(data))
        .catch(error => console.error('Error fetching posts:', error));
    }, [postId]);

    useEffect(() => {
        if (post) {
            fetch(`https://jsonplaceholder.typicode.com/users/${post.userId}`)
                .then(response => response.json())
                .then(data => setUser(data))
                .catch(error => console.error('Error fetching user:', error));
        }
    }, [post]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
        .then(response => response.json())
        .then(data => setPostComments(data))
        .catch(error => console.error('Error fetching comments:', error));
    }, [postId]);

    if (!post || !user) {
        return <p>Loading post...</p>;
    }

    // Submit a new comment
    const handleCommentSubmit = (newComment) => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId: Number(postId),
                name: newComment.name,
                body: newComment.message
            })
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }
            return response.json();
        })
        .then(data => {
            setPostComments(prevComments => [...prevComments, data]);
        })
        .catch(error => console.error('Error submitting comment:', error));
    };

    return (
        <div>
            <Header />

            <div className="blog-post">
                <h1>{post.title}</h1>
                <p>{post.body}</p>

                <div className="post-author">
                    <h3>Author: {user.name}</h3>
                    <p>Email: {user.email}</p>
                </div>

                <div className="post-comments">
                    <Comments comments={postComments} />
                </div>

                {loggedInUser ? (
                    <CommentForm
                    onSubmit={handleCommentSubmit}
                    username={loggedInUser.username}
                 />
                    ) : (
                        <p>
                            Please <Link to="/login" className="login-button">log in</Link> to view and leave a comment.
                        </p>
                    )}
            </div>

            <Footer />
        </div>
    );
}

export default BlogPost;