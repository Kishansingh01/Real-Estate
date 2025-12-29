const API_URL = 'http://localhost:5000/api';

// Signup
export const signup = async (name, email, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/signup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // Important for cookies
            body: JSON.stringify({ name, email, password }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return { success: false, message: 'Network error' };
    }
};

// Login
export const login = async (email, password) => {
    try {
        const response = await fetch(`${API_URL}/auth/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include', // Important for cookies
            body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return { success: false, message: 'Network error' };
    }
};

// Logout
export const logout = async () => {
    try {
        const response = await fetch(`${API_URL}/auth/logout`, {
            method: 'POST',
            credentials: 'include',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return { success: false, message: 'Network error' };
    }
};

// Get current user
export const getCurrentUser = async () => {
    try {
        const response = await fetch(`${API_URL}/auth/me`, {
            credentials: 'include',
        });
        const data = await response.json();
        return data;
    } catch (error) {
        return { success: false, message: 'Network error' };
    }
};
