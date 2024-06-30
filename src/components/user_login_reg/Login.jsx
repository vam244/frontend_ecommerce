import React, { useState } from "react";
import { useHistory } from 'react-router-dom';


const  Login = (props) => {
    const [username, setusername] = useState('');
    const [pass, setPass] = useState('');
   const removeitem=()=>{
    localStorage.removeItem('token')
    history.push('/')
    window.location.reload();

   }
   const history = useHistory();
    const handleSubmit = async()=>{
       
       let response= await fetch('http://127.0.0.1:8000/login/',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json',
              
              },
              body:JSON.stringify({
                username: username,
                password: pass
            })
        })
        // setusername('')
        setPass('*******dffd*')
        if (response.ok) {
      
          let t=await response.json()
          localStorage.setItem('token',t.token)
        }
        // console.log(t.token)
        history.push('/');
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
                {!localStorage.getItem('token')&& <h2 style={{marginBottom:50,color:'red'}}><u>Login</u></h2>}
               { !localStorage.getItem('token')?<><label htmlFor="username">username</label><input value={username} onChange={(e) => setusername(e.target.value)}  placeholder="xyz" id="name" name="name" /></>:<><label htmlFor="username">username</label><h2>{props.userData.username}</h2></>}
               {!localStorage.getItem('token')?<> <label htmlFor="password">password</label><input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" /></>:<><label htmlFor="username">Email ID</label><h2>{props.userData.email}</h2></>}
                
            </div>
                { !localStorage.getItem('token')? <button style={{backgroundColor:"green",color:"black"}} onClick={handleSubmit}>Log In</button> :<button style={{backgroundColor:"red",color:"black",marginBottom:"50px",marginTop:"10px"}} onClick={removeitem}>Log out</button>}
    
            {  !localStorage.getItem('token')&&<button style={{backgroundColor:"blue",color:"white",marginTop:10,marginBottom:"5px"}} className="btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>}
        </div>
    )
}
export default Login
