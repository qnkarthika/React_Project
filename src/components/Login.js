import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './Login.css'; 
function Login() {
    const [name, Setname] = useState("");
    const [password, SetPassword] = useState("");
    const Navigate = useNavigate();

    function updateName(e) {
        Setname(e.target.value);
    }

    function updatePassword(e) {
        SetPassword(e.target.value);
    }

    function check() {
        if (name === "karthika" && password === "123456") {
            Navigate('/Details');
        } else {
            alert('Invalid credentials');
        }
    }

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                <input type="text" value={name} onChange={updateName} placeholder="Enter your name" />
                <input type="password" value={password} onChange={updatePassword} placeholder="Enter your password" />
                <button onClick={check}>Login</button>
            </div>
        </div>
    );
}

export default Login;
