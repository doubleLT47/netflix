import "./register.scss"
import { useState, useRef } from "react"
import axios from "axios"
import { Link, useHistory } from "react-router-dom"

const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const history = useHistory();

    const handleStart = () => {
        setEmail(emailRef.current.value);
    }

    const handleFinish = async (e) => {
        e.preventDefault();
        setUsername(usernameRef.current.value);
        setPassword(passwordRef.current.value);
        try {
            await axios.post("auth/register", {username, email, password});
            history.push("/login");
        }
        catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                    <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt="" />
                    <button className="login-button">
                    	<Link to="/login">
												Sign In
                    	</Link>
										</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder="Email address..." ref={emailRef} />
                        <button className="register-button" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="text" placeholder="Username..." ref={usernameRef} />
                        <input type="password" placeholder="Password..." ref={passwordRef} />
                        <button className="register-button" onClick={handleFinish}>Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register
