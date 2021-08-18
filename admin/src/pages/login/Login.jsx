import { useState, useContext } from 'react'
import { AuthContext } from '../../context/authContext/AuthContext';
import { login } from '../../context/authContext/apiCalls'
import "./login.css"

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const {isFetching, dispatch} = useContext(AuthContext);

	const handleLogin = (e) => {
		e.preventDefault();
		login({email, password}, dispatch);
	}
	
	return (
		<div className="login">
			<form className="login__form">
				<h1>Sign in</h1>
				<input type="email" placeholder="Enter your email..." className="login__input" onChange={(e) => setEmail(e.target.value)}/>
				<input type="password" placeholder="Enter your password..." className="login__input" onChange={(e) => setPassword(e.target.value)}/>
				<button className="login__button" onClick={handleLogin} disabled={isFetching}>Login</button>
			</form>
		</div>
	)
}

export default Login
