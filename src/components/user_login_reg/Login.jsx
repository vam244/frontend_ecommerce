import React, { useState ,useEffect} from "react";
import { useHistory } from 'react-router-dom';

const  Login = (props) => {
    const [username, setusername] = useState('');
    const [pass, setPass] = useState('');
   const removeitem=()=>{
    localStorage.removeItem('token')
    history.push('/')
    // window.location.reload();git 

   }
   const history = useHistory();
    const handleSubmit = async()=>{
       
       let response= await fetch('https://bvamsi.pythonanywhere.com/login/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              
              },
              body:JSON.stringify({
                username: username,
                password: pass
            })
        })
        setusername('')
        setPass('')
        if (response.ok) {
          // props.setIsLoggedIn(true); // Set the login state to true if the response is successful
          let t=await response.json()
          localStorage.setItem('token',t.token)
        }
        // console.log(t.token)
        history.push('/cart');
        window.location.reload();
          // console.log(JSON.parse(localStorage.getItem('Data_user')))
    }
    // window.onload = function() {
    //     // Call your function here
    //     handleSubmit();
       
    // };
    // localStorage.setItem('Data_user', JSON.stringify(username))
    // localStorage.setItem('Data_pass', JSON.stringify(pass))

  
    return (
        <div className="auth-form-container" style={{backgroundColor:'lightgoldenrodyellow'}}>
            <div className="login-form" >
            <h2 style={{marginBottom:50,color:'red'}}><u>Login</u></h2>
                <label htmlFor="username">username</label>
                <input value={username} onChange={(e) => setusername(e.target.value)}  placeholder="xyz" id="name" name="name" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                
            </div>
                { !localStorage.getItem('token')? <button style={{backgroundColor:"green",color:"black"}} onClick={handleSubmit}>Log In</button> :<button style={{backgroundColor:"red",color:"black"}} onClick={removeitem}>Log out</button>}
    
            <button style={{backgroundColor:"blue",color:"white",marginTop:10}} className="btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}
export default Login
