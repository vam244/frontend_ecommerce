import React, { useState } from "react";
import "./Register.css"; // Import the CSS file

const Register = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = async () => {
    await fetch('https://bvamsi.pythonanywhere.com//register/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: name,
        password: pass,
        email: email,
      }),
    });
  };

  return (
    <div className="auth-form-container">
      <h2><u>Register</u></h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">username</label>
        <input
          value={name}
          name="name"
          onChange={(e) => setName(e.target.value)}
          id="name"
          placeholder="userName"
        />
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={pass}
          onChange={(e) => setPass(e.target.value)}
          type="password"
          placeholder="********"
          id="password"
          name="password"
        />
        <button type="submit" className="submit-btn">Log In</button>
      </form>
      <button
        className="link-btn"
        onClick={() => props.onFormSwitch('login')}
      >
        Already have an account? Login here.
      </button>
    </div>
  );
};

export default Register;
