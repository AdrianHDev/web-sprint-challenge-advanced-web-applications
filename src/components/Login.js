import axios from "axios";
import React, {   useState } from "react";

const Login = () => {
  const [userInfo, setUserInfo]= useState({username: "", password: ""})
  const [error, setError] = useState('')
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const handleSubmit = async ev => {
    ev.preventDefault();
    try {
      const result = await axios.post('http://localhost:5000/api/login', userInfo)
      localStorage.setItem('token', result.data.payload)
    } catch (err) {
      setError(err.message)
    }
  }

  const handleChange = ev => {
    ev.persist();
    console.log(ev.target.name, ev.target.value);
    setUserInfo({...userInfo, [ev.target.name]: ev.target.value, })
  }

  //replace with error state

  return (
    <div>
      <h1>Welcome to the Bubble App!</h1>
      <div data-testid="loginForm" className="login-form">
        <form onSubmit={handleSubmit}>
          <label>
            Username:<br/>
            <input type="text" onChange={handleChange} value={userInfo.username} name="username" data-testid="username" id="usernameInput" />
            <br/>
            <br/>
          </label>
          <label>
            Password:<br/>
            <input type="password" onChange={handleChange} value={userInfo.password} name="password" data-testid="password" id="passwordInput " />
            <br/>
          </label>
          <button type="submit">Log-In</button>
        </form>
      </div>

      <p data-testid="errorMessage" className="error">{error}</p>
    </div>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE YOUR USERNAME AND PASSWORD INPUTS INCLUDE data-testid="username" and data-testid="password"
//4. If either the username or password is not entered, display the following words with the p tag provided: Username or Password not valid.
//5. If the username / password is equal to Lambda / i<3Lambd4, save that token to localStorage.