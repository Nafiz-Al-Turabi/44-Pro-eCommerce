import React, { createContext, useState, useEffect } from 'react';
import axiosInstance from '../../Axios/AxiosInstance';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            const userData = decodeToken(token);
            setUser(userData);
        }
    }, []);

    const signup = async (username, password) => {
        try {
            const response = await axiosInstance.post('/signup', { username, password });
            const token = response.data.token;

            localStorage.setItem('token', token);
            setUser(decodeToken(token));
        } catch (error) {
            console.error('Signup error:', error);
        }
    };

    const login = async (username, password) => {
        try {
            const response = await axiosInstance.post('/login', { username, password });
            const token = response.data.token;

            localStorage.setItem('token', token);
            setUser(decodeToken(token));
        } catch (error) {
            console.error('Login error:', error);
            // Handle error (e.g., show a notification)
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, signup, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
// Implement a function to decode the JWT token
const decodeToken = (token) => {
    // Decode your token here (e.g., using jwt-decode library)
    return { username: 'exampleUser' }; // Replace with actual decoding logic
};
