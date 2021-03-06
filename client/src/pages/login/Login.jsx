import "./login.scss"
import { login } from "../../context/authContext/apiCalls"
import { useState, useContext } from "react"
import { AuthContext } from "../../context/authContext/AuthContext";
import { Link } from "react-router-dom"

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {dispatch} = useContext(AuthContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        login({email, password}, dispatch);
    }

    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder="Email or phone number" onChange={e => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <button className="login-button" onClick={handleSubmit}>Sign In</button>
                    <span>New to Netflix ? <Link to="/register"><b>Sign up now.</b></Link></span>
                    <small>
                        This page is protected by Goggle reCAPTCHA to ensure you're not a bot. <b>Learn more</b> 
                    </small>
                </form>
                
            </div>
        </div>
    )
}

export default Login
