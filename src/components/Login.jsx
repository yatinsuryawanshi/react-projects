import React from 'react';
import './Login.css';

const Login = () => {
  const handleLogin = () => {
    localStorage.setItem('isAdmin', 'true');
    alert('Logged in as Admin');
  };

  return (
    <div className="login">
      <button onClick={handleLogin}>Login as Admin</button>
    </div>
  );
};

export default Login;
