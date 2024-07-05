import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import "./Login.css"; // Import the CSS file

const Login = (props) => {
  const [username, setusername] = useState('');
  const [pass, setPass] = useState('');

  const history = useHistory();

  const removeitem = () => {
    localStorage.removeItem('token');
    history.push('/');
    window.location.reload();
  };

  const handleSubmit = async () => {
    let response = await fetch('https://bvamsi.pythonanywhere.com//login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: pass,
      }),
    });

    setPass('*******dffd*');
    if (response.ok) {
      let t = await response.json();
      localStorage.setItem('token', t.token);
    }

    history.push('/');
    window.location.reload();
  };

  return (
    <div className="auth-form-container">
      <div className="login-form">
        {!localStorage.getItem('token') && <h2>Login</h2>}
        {!localStorage.getItem('token') ? (
          <>
            <label htmlFor="username">username</label>
            <input
              value={username}
              onChange={(e) => setusername(e.target.value)}
              placeholder="xyz"
              id="name"
              name="name"
            />
          </>
        ) : (
          <>
            <label htmlFor="username">username</label>
            <h3>{props.userData.username}</h3>
          </>
        )}
        {!localStorage.getItem('token') ? (
          <>
            <label htmlFor="password">password</label>
            <input
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
          </>
        ) : (
          <>
            <label htmlFor="username">Email ID</label>
            <h3>{props.userData.email}</h3>
          </>
        )}
      </div>
      {!localStorage.getItem('token') ? (
        <button className="login-btn" onClick={handleSubmit}>Log In</button>
      ) : (
        <button className="logout-btn" onClick={removeitem}>Log out</button>
      )}

      {!localStorage.getItem('token') && (
        <button
          className="register-btn"
          onClick={() => props.onFormSwitch('register')}
        >
          Don't have an account? Register here.
        </button>
      )}
    </div>
  );
};

export default Login;
