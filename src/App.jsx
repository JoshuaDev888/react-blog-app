import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import BlogPost from './components/BlogPost'
import Contact from './components/Contact'
import PostList from './components/PostList'
import {ThemeProvider} from "./common/ThemeContext.jsx";
import {useTheme} from "./common/ThemeContext.jsx";
import { AuthProvider } from './components/AuthContext.jsx';
import Login from './components/Login.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Homepage from './components/Homepage.jsx';

function AppContent() {
    const {theme} = useTheme();
    return (
            <div className={`app ${theme}`}>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/posts" element={<PostList />} />
                    <Route path="/posts/:id" element={<BlogPost />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
    );
}

function App() {
    return (
        <ThemeProvider>
            <AuthProvider>
                <AppContent/>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;
