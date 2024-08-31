import React, { useState } from 'react';
import './x-login.css';

function XLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (!username || !password) {
      setMessage('Please fill out this field.');
    } else if (username === 'user' && password === 'password') {
      setMessage('Welcome, user!');
    } else {
      setMessage('Invalid username or password');
    }
  };

  return (
    <div className="login-container">
      <h1>Login Page</h1>
      {message && <div className="message">{message}</div>}
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            className="input-box"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="input-box"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default XLogin;
