//import logo from './logo.svg';
import con2 from '../assest/con2.jpg'
import '../css/Login.css';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

function Login() {
    const Navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });
    const [loading, setLoading] = useState(false);
   

    const handleLogin = () => {
       
        // Validate input and perform login logic here
        const newErrors = {};
        //setLoading(true);

        if (!username) {
            newErrors.username = 'Username is required';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        }

        if (newErrors.username || newErrors.password) {
            setErrors(newErrors);
        } else {
            setLoading(true);
            setTimeout(() => {
                // Validate input and perform login logic here
                if (username.trim() === 'admin' && password.trim() === 'admin') {
                    alert('Login successful');
                    //history.push('/dashboard');
                    Navigate('/home');
                } else {
                    alert('The Username or Password is Incorrect');
                }

                setLoading(false); // Set loading back to false after the login logic is completed
            }, 2000);
        }
    };
    return (
        <div className="container-fluid">
            <div className="container">
                <div className="logoimage">
                    <img className="img" src={con2} alt="" />
                </div>
                <div className="heading">
                    <h2 className="welcom">Welcome!</h2>
                    <p className="paraghraph">Please Sign in to your account</p>

                </div>
                <div >
                    <div><input type="text" placeholder="Username" className="inputbox" value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                        {errors.username && <div className="error-message">{errors.username}</div>}
                    </div>
                    <div ><input type="password" placeholder="Password" className="inputbox" value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <div className="error-message">{errors.password}</div>}
                    </div>
                </div>
                <div className="msg">
                    <input type="checkbox" className="checkbox" id="myCheckbox" />
                    <label for="myCheckbox">Remember me</label>
                    <a className="forgatepassword" href="/">Forgot password?</a>
                </div>
                <div>
                    <button className="btn" onClick={handleLogin}> {loading ? <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div> : 'Login'}</button>

                </div>

            </div>

        </div>
    );
}

export default Login;