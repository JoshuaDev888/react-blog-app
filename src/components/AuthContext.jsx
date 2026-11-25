import { createContext, useState } from 'react';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [user, setUser] = useState(() => {
        return JSON.parse(localStorage.getItem('user')) || null;
    });

    function login(username, password) {
        if (username.trim() && password.trim()) {
            const userData = { username: username.trim() };

            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));

            return true;
        }

        return false;
    }

    function logout() {
        setUser(null);
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}