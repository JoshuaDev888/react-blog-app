import { useContext, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { AuthContext } from '../components/AuthContext.jsx';
import Header from '../common/Header.jsx';
import Footer from '../common/Footer.jsx';

export default function Login() {
    const { login, user } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    function handleSubmit(event) {
        event.preventDefault();

        if (login(username, password)) {
            navigate('/posts');
        } else {
            setMessage('Please enter a username and password.');
        }
    }

    if (user) {
        return <Navigate to="/posts" replace />;
    }

    return (
        <div>
            <Header />

                <main className="login-page">
                    <section className="login-card">
                        <h1>Welcome back</h1>
                        <p>Sign in to continue reading and commenting.</p>

                        <form onSubmit={handleSubmit}>
                            <label>Username</label>
                            <input
                                type="text"
                                value={username}
                                onChange={(event) => setUsername(event.target.value)}
                                required
                            />

                            <label>Password</label>
                            <input
                                type="password"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                required
                            />

                            <button type="submit">Log in</button>

                            {message && <p>{message}</p>}
                        </form>
                    </section>
                </main>

            <Footer />
        </div>
    );
}