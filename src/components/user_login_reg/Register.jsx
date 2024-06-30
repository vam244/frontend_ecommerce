import React, { useState } from "react";

 const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = async()=>{
        await fetch('http://127.0.0.1:8000/register/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
            
              },
              body:JSON.stringify({
                username: name,
                password: pass,
                email:email
            })
        })
    }

    return (
        <div className="auth-form-container" style={{backgroundColor:'lightgoldenrodyellow'}}>
            <h2 style={{marginBottom:50,color:'red'}}>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">username</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="userName" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit" style={{backgroundColor:"green",color:"black"}}>Log In</button>
        </form>
        <button className="link-btn" style={{backgroundColor:"blue",color:"white",marginTop:10}}onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
    </div>
    )
}
export default Register