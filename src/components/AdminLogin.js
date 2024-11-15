import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminLogin.css'; // Import the CSS file

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleAdminLogin = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (response.ok && data.role === "ADMIN") {
                navigate("/admin-dashboard", { state: { username, password } });
            } else {
                alert(data.message || "Access denied. Only Admins are allowed.");
            }
        } catch (error) {
            console.error("Error during admin login", error);
            alert("An error occurred during login");
        }
    };

    return (
        <div className="admin-login-container"> {/* Unique class added here */}
            <h2>Admin Login</h2>
            <input 
                type="text" 
                placeholder="Admin Username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Admin Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={handleAdminLogin}>Login as Admin</button>
        </div>
    );
}

export default AdminLogin;
